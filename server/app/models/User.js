const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      min: [6, "Tối thiếu 6 ký tự"],
      max: [1024, "Quá nhiều ký tự"],
    },
    address: { type: String, required: false },
    phone: {
      type: Number,
      required: false,
      min: [8, "Tối thiểu 8 số"],
      max: [11, "Tối đa 11 số"],
    },
    isAdmin: { type: Boolean, default: false, required: false },
    cartItems: [{ type: String, default: {}, required: false }],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
