const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    // id: { type: Number, required: true },

    shipping: { type: Number, required: true },
    total: { type: Number, required: true },

    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },

    products: [
      {
        name: { type: String, required: true },
        count: { type: Number, required: true },
        thumb: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],

    fullname: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    payment: { type: String, required: true },
    note: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
