const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: { type: String },
  manufacturer: { type: String },
  productType: { type: String },
  productGroup: { type: String },
  price: { type: Number },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
