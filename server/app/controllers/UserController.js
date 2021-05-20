const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
} = require("../../util/Validation");

const generateToken = require("../../util/token");

class UserController {
  // [GET] /products/list
  list(req, res, next) {
    UserModel.find({})
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }

  // [POST] /user/register
  async register(req, res, next) {
    const { name, email, password } = req.body;

    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking email exist
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) return res.status(400).send("Email already exist");

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({ name, email, password: hashedPassword });
    user
      .save()
      .then((user) => {
        const { name, email, isAdmin } = user;
        res.send({ name, email, isAdmin });
      })
      .catch((err) => res.send(err));
  }

  // [POST] /user/login
  async login(req, res) {
    const { email, password } = req.body;

    // Validate
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking email
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).send("Email does not found");

    const { name, isAdmin } = user;

    // Checking Password
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) return res.status(400).send("Invalid password");

    // Create token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_LIFE,
    });

    // Refresh token
    const refreshToken = jwt.sign(
      { _id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_LIFE,
      }
    );

    res.header("auth", token).send({
      name,
      isAdmin,
      email: user.email,
      token,
      refreshToken,
    });
  }
  async refreshToken(req, res) {
    const { refresh } = req.body;
    if (!refresh) return res.status(401).send("No refresh token provide");

    try {
      const verified = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
      console.log(verified);

      const user = await UserModel.find({ _id: verified._id });

      if (!user) return res.status(400).send("User does not found");

      // Create token
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_LIFE,
      });

      // Refresh token
      const refreshToken = jwt.sign(
        { _id: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: process.env.REFRESH_TOKEN_LIFE,
        }
      );
      res.send({ token, refreshToken });
    } catch (error) {
      res.status(401).send(error);
    }
  }

  test(req, res) {
    console.log("user: ",req.user);
    res.send("test");
  }
}

module.exports = new UserController();
