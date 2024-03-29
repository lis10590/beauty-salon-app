const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const database = mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/beauty-salon",
    options
  )
  .then(() => console.log("Connected to database."))
  .catch((err) => console.error("Error connecting to database:", err.message));

module.exports = database;
