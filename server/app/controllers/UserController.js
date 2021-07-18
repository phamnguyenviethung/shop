const User = require("../models/User");
const factory = require("./handlerFactory");
const catchAsync = require("../../utils/catchAsync");

exports.getAll = factory.getAll(User);
exports.getOne = catchAsync(async (req, res, next) => {
  let doc = await User.findOne({ uid: req.user.uid });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  // Hide private data
  delete doc.password;

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
