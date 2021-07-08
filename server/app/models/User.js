const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "User must have name"], trim: true },
    uid: { type: Number, required: [true, "User must have id"], trim: true },
    email: {
      type: String,
      required: [true, "User need provide email"],
      unique: true,
      trim: true,
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
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.confirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
