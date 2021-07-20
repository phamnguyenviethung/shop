const User = require("../models/User");
const factory = require("./handlerFactory");
const catchAsync = require("../../utils/catchAsync");
const API = require("../../utils/apiFeatures");

const AppError = require("../../utils/appError");
exports.getPublicInfo = (req, res, next) => {
  req.query.fields = "-password -_id -__v -createdAt -updatedAt";

  next();
};

exports.updateUser = catchAsync(async (req, res, next) => {
  const allowToUpdate = ["address", "name", "phone", "email"];
  const data = {};

  for (const key in req.body) {
    if (allowToUpdate.includes(key)) {
      Object.assign(data, {
        [key]: req.body[key],
      });
    }
  }

  const doc = await User.findOneAndUpdate({ uid: req.user.uid }, data, {
    new: true,
    runValidators: true,
  }).select("address name phone email -_id");

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getOne = catchAsync(async (req, res, next) => {
  let doc = await User.findOne({ uid: req.user.uid });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getAll = factory.getAll(User);
