const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "ShopOwner",
    },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: [{ type: String }],
    price: { type: Number, required: true },
    type: { type: String, default: "Product" },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
