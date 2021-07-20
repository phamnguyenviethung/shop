const factory = require("./handlerFactory");
const ProductModel = require("../models/Product");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.getAll = factory.getAll(ProductModel);
exports.getByID = factory.getOne(ProductModel);
exports.create = factory.createOne(ProductModel);
exports.update = factory.updateOne(ProductModel);
exports.delete = factory.deleteOne(ProductModel);

exports.getBySlug = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const doc = await ProductModel.findOne({ slug });
  if (!doc) {
    return next(new AppError("No document found with that slug", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
