const productsRouter = require("./products");
const orderRouter = require("./order");
const userRouter = require("./user");
const cartRouter = require("./cart");

function route(app) {
  app.use("/api/products", productsRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/user", userRouter);
  app.use("/api/cart", cartRouter);
}

module.exports = route;
