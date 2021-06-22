const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      slug: "name",
    },

    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      default: "",
    },

    quantity: {
      type: Array,
      required: true,
      default: [],
    },
    size: {
      type: Array,
      required: true,
      default: [],
    },
    color: {
      type: Array,
      required: true,
      default: [],
    },

    thumb: {
      type: Array,
      required: true,
      default: [],
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    categories: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
