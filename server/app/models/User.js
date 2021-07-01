const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "User must have name"], trim: true },
    email: {
      type: String,
      required: [true, "User need provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: [6, "Tối thiếu 6 ký tự"],
      max: [1024, "Quá nhiều ký tự"],
    },
    address: { type: String },
    phone: {
      type: Number,
      min: [8, "Tối thiểu 8 số"],
      max: [11, "Tối đa 11 số"],
    },
    isAdmin: { type: Boolean, default: false },
    // cart: {
    //   type: Array,
    //   default: [],
    // },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
