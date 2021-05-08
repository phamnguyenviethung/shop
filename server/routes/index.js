const productsRouter = require("./products");
const orderRouter = require("./order");

function route(app) {
  app.use("/api/products", productsRouter);
  app.use("/api/order", orderRouter);
}

module.exports = route;
