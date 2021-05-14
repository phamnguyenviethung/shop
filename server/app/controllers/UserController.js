const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
} = require("../../util/Validation");

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

    // Checking email exitst
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) return res.status(400).send("Email already exist");

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({ name, email, password: hashedPassword });
    user
      .save()
      .then((rs) => res.send("done"))
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
    console.log(user);
    if (!user) return res.status(400).send("Email does not found");

    const { name, isAdmin } = user;

    // Checking Password
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) return res.status(400).send("Invalid password");

    // Create token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send({
      name,
      isAdmin,
      email: user.email,
      token,
    });
  }

  // [GET] /user/cart/:id
  getCart(req, res) {
    const { id } = req.params;

    UserModel.findOne({ _id: id })
      .then((user) => res.send(user.cartItems))
      .catch((err) => res.send(err));
  }

  updateCart(req, res) {
    const { id } = req.params;

    const { cartItems } = req.body;
    UserModel.updateOne({ cartItems })
      .then((user) => res.send("done"))
      .catch((err) => res.send(err));
  }
}

module.exports = new UserController();
