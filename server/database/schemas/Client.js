const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
  fullName: { type: String },
  phoneNumber: { type: Number },
  treatmentHistory: {
    treatmentName: [String],
    date: [Date],
  },
  productsPurchased: [String],
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
