const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
      unique: 1,
      maxlength: 100,
    },
    description: {
      require: true,
      type: String,
      maxlength: 1000,
    },
    price: {
      require: true,
      type: Number,
      maxlength: 255,
    },
    brand: {
      type: ObjectId,
      ref: "brand",
      require: true,
    },
    shipping: {
      require: true,
      type: Boolean,
    },
    available: {
      require: true,
      type: Boolean,
    },
    wood: {
      type: ObjectId,
      ref: "wood",
      require: true,
    },
    frets: {
      require: true,
      type: Number,
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    publish: {
      require: true,
      type: Boolean,
    },
    Images: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
