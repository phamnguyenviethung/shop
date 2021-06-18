const jwt = require("jsonwebtoken");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

module.exports = catchAsync(async (req, res, next) => {
  const token = req.header("auth");

  if (!token)
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );

  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  if (!verified) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }
  req.user = verified;
  next();
});
