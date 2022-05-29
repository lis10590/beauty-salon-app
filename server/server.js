const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const router = express.Router();
const routes = require("./routes");
require("./database");

const PORT = process.env.PORT || 3001;
const origin = "http://localhost:3000";

app.use(
  cors({
    credentials: true,
    origin,
  })
);

app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
