const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, maxlength: 20 },
  lastName: { type: String, maxlength: 20 },
  password: { type: String },
  email: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
