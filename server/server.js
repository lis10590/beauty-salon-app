const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const router = express.Router();
const routes = require("./routes");
const path = require("path");
require("./database");

const PORT = process.env.PORT || "";
const ORIGIN = process.env.ORIGIN;

app.use(
  cors({
    credentials: true,
    ORIGIN,
  })
);

app.use(express.json());
app.use("/", routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
