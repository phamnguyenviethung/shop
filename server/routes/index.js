const productsRouter = require("./products");
const orderRouter = require("./order");
const userRouter = require("./user");
const cartRouter = require("./cart");
const searchRouter = require("./search");

function route(app) {
  app.use("/api/products", productsRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/user", userRouter);
  app.use("/api/cart", cartRouter);
  
  app.use("/search", searchRouter);
}

module.exports = route;
