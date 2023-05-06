const mongoose = require("mongoose");
const { Schema } = mongoose;

const TreatmentHistorySchema = new Schema({
  treatmentId: { type: String },
  treatmentName: { type: String },
  count: { type: Number },
  revenue: { type: Number },
});

const TreatmentHistory = mongoose.model(
  "TreatmentsHistory",
  TreatmentHistorySchema
);

module.exports = TreatmentHistory;

module.exports = TreatmentHistory;
