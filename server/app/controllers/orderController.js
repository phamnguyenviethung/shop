const factory = require("./handlerFactory");
const Order = require("../models/Order");
const catchAsync = require("../../utils/catchAsync");
const randomCode = require("../../utils/generateCode");

exports.create = catchAsync(async (req, res) => {
  const data = {
    ...req.body,
    code: randomCode(),
  };
  console.log(data);

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
