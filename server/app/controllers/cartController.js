const factory = require("./handlerFactory");
const Cart = require("../models/Cart");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.updateCart = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const doc = await Cart.findOneAndUpdate({ userId: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError("Không tìm thấy dữ liệu của UID được cấp", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getUserCart = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const doc = await Cart.findOne({ userId: id });
  if (!doc) {
    return next(new AppError("Không tìm thấy dữ liệu của UID được cấp", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
