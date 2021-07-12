const AppError = require("../../utils/appError");

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("Bạn không có quyền thực hiện hành động này.", 403)
      );
    }

    next();
  };
};
