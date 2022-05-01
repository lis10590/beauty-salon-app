const mongoose = require("mongoose");
const { Schema } = mongoose;

const treatmentSchema = new Schema({
  treatmentName: { type: String },
  price: { type: Number },
});

const Treatment = mongoose.model("Treatment", treatmentSchema);

module.exports = Treatment;
