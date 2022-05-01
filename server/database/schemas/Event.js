const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  start: { type: Date },
  end: { type: Date },
  title: { type: String },
  clientName: { type: String },
  phoneNumber: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
