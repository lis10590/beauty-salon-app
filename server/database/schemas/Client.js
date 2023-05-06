const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
  fullName: { type: String },
  phoneNumber: { type: String },
  treatmentHistory: [{ treatmentName: { String }, date: { Date } }],

  productsPurchased: [
    {
      productName: { String },
      date: { Date },
    },
  ],
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
