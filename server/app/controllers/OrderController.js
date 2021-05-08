const OrderModel = require("../models/Order");

class OrderController {
  // [POST] /order/create
  create(req, res, next) {
    const {
      fullname,
      address,
      email,
      phone,
      note,
      payment,
      isPaid,
      isDelivered,
      deliveredAt,
      products,
      total,
      shipping,
    } = req.body.orderInfo;

    const order = new OrderModel({
      total,
      shipping,
      isPaid,
      isDelivered,
      deliveredAt,
      products,
      fullname,
      address,
      email,
      phone,
      note,
      payment,
    });

    order
      .save()
      .then(() => res.send("created"))
      .catch((error) => console.log(error));
  }
}

module.exports = new OrderController();
