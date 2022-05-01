const mongoose = require("mongoose");
const { Schema } = mongoose;

const TreatmentHistorySchema = new Schema({
  fullName: { type: String },
  phoneNumber: { type: String },
  treatmentName: { type: String },
  date: { type: Date },
});

const TreatmentHistory = mongoose.model(
  "TreatmentsHistory",
  TreatmentHistorySchema
);

module.exports = TreatmentHistory;
