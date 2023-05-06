const mongoose = require("mongoose");
const { Schema } = mongoose;

const purchasedProductSchema = new Schema({
  productId: { type: String },
  productName: { type: String },
  count: { type: Number },
  revenue: { type: Number },
});

const PurchasedProduct = mongoose.model(
  "PurchasedProducts",
  purchasedProductSchema
);

module.exports = PurchasedProduct;
