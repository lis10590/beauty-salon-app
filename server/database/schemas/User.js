const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fname: { type: String, maxlength: 20 },
  lname: { type: String, maxlength: 20 },
  password: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String },
  salt: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
