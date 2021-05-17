const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: String, required: true },
  productList: { type: Array, required: true, default: [] },
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
