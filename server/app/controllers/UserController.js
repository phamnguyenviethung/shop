const User = require("../models/User");
const generateToken = require("../../utils/token");
const catchAsync = require("../../utils/catchAsync");
const jwt = require("jsonwebtoken");

const {
  registerValidation,
  loginValidation,
} = require("../../utils/Validation");
const AppError = require("../../utils/appError");

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  // Validate
  const { error } = registerValidation(req.body);
  if (error)
    return res.status(400).json({
      status: "failed",
      message: error.details[0].message,
    });

  // Checking email exist
  const existEmail = await User.findOne({ email });
  if (existEmail)
    return res.status(400).json({
      status: "failed",
      meesage: "Email already exist",
    });

  const user = await User.create({ name, email, password });
  const data = { name: user.name, email: user.email };

  res.status(201).json({
    status: "success",
    data: {
      data,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password does not exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // Validate

  const { error } = loginValidation(req.body);

  if (error) return next(new AppError(error.details[0].message, 400));

  // Checking email
  const user = await User.findOne({ email });
  if (!user) return next(new AppError("Email does not found", 400));

  // Checking password
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // Create token
  const { accessToken, refreshToken } = generateToken({ _id: user._id });

  const { name, isAdmin } = user;

  res
    .status(200)
    .header("auth", accessToken)
    .json({
      status: "success",
      data: {
        data: {
          name,
          isAdmin,
          email: user.email,
          accessToken,
          refreshToken,
        },
      },
    });
});

exports.refreshToken = catchAsync(async (req, res, next) => {
  const { refresh } = req.body;
  if (!refresh) return next(new AppError("No refresh token provide"), 400);

  const verified = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
  const user = await User.find({ _id: verified._id });
  if (!user) return next(new AppError("Invalid token"), 400);

  const { accessToken, refreshToken } = generateToken({ _id: user._id });

  res.status(201).json({
    status: "success",
    data: {
      data: {
        accessToken,
        refreshToken,
      },
    },
  });
});
