const factory = require("./handlerFactory");
const Order = require("../models/Order");
const catchAsync = require("../../utils/catchAsync");
const randomCode = require("../../utils/generateCode");
const dayjs = require("dayjs");
const localizedFormat = require("dayjs/plugin/localizedFormat");
const API = require("../../utils/apiFeatures");

exports.create = catchAsync(async (req, res) => {
  const data = {
    ...req.body,
    code: randomCode(),
  };

  const doc = await Order.create(data);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
exports.getAll = factory.getAll(Order);
exports.getOne = factory.getOne(Order);

exports.getByUID = catchAsync(async (req, res, next) => {
  const features = new API(
    Order.find({ uid: req.params.uid }),
    req.query
  ).limitFields();

  const doc = await features.query;
  console.log();

  if (!doc) {
    return next(new AppError("Không tìm thấy đơn hàng nào của ID.", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
