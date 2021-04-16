const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StickerSchema = new Schema(
  {
    stickerName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sticker = mongoose.model("Sticker", StickerSchema);
module.exports = Sticker;
