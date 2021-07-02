const factory = require("./handlerFactory");
const Order = require("../models/Order");
// const catchAsync = require("../../utils/catchAsync");
// const AppError = require("../../utils/appError");

exports.create = factory.createOne(Order);
exports.getAll = factory.getAll(Order);
