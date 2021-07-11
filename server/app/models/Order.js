const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    shipping: { type: Number, required: true },
    total: { type: Number, required: true },
    discount: { type: Number, required: true },
    percent: { type: Number, required: true },

    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: String, default: null },

    products: [
      {
        name: { type: String, required: true },
        count: { type: Number, required: true },
        thumb: { type: Array, required: true },
        price: { type: Number, required: true },
        discount: { type: Number, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
      },
    ],

    code: { type: String, required: true },

    uid: { type: Number, required: true },
    fullname: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    payment: {
      type: String,
      required: [true, "Vui lòng cung cấp phương thức thanh toán"],
    },
    note: { type: String },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
