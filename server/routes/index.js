const productsRouter = require("./products");
const orderRouter = require("./order");
const userRouter = require("./user");

function route(app) {
  app.use("/api/products", productsRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/user", userRouter);
}

module.exports = route;
