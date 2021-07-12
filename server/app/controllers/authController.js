const User = require("../models/User");
const Cart = require("../models/Cart");
const generateToken = require("../../utils/generateToken");
const catchAsync = require("../../utils/catchAsync");
const jwt = require("jsonwebtoken");
const faker = require("faker");

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

  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) return next(new AppError("Email đã sử dụng", 400));

  // Random uid
  const id = faker.datatype.number({
    min: 100000,
    max: 999999,
  });

  const user = await User.create({ name, email, password, uid: id });
  // Create cart
  await Cart.create({ userId: user.uid, productList: [] });

  const data = { name: user.name, email: user.email, uid: user.uid };

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
    return next(new AppError("Vui lòng nhập email và mật khẩu", 400));
  }

  // Validate

  const { error } = loginValidation(req.body);

  if (error) return next(new AppError(error.details[0].message, 400));

  // Checking email
  const user = await User.findOne({ email });
  if (!user) return next(new AppError("Email không tồn tại", 400));

  // Checking password
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Sai email hoặc mật khẩu", 401));
  }

  // Create token
  const { accessToken, refreshToken } = generateToken({
    uid: user.uid,
    role: user.role,
  });

  const { name, isAdmin, uid, role } = user;

  res.status(200).json({
    status: "success",
    data: {
      data: {
        name,
        uid,
        isAdmin,
        email: user.email,
        accessToken,
        refreshToken,
        role,
      },
    },
  });
});

exports.refreshToken = catchAsync(async (req, res, next) => {
  const { refresh } = req.body;
  if (!refresh) return next(new AppError("Không tìm thấy token"), 400);

  const verified = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
  const user = await User.find({ _id: verified._id });
  if (!user) return next(new AppError("Token không hợp lệ"), 400);

  const { accessToken, refreshToken } = generateToken({
    uid: user.uid,
    role: user.role,
  });

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
