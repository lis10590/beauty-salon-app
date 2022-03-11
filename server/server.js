const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const routes = require("./routes");
require("./database");

const port = 3001;
const origin = "http://localhost:3000";

app.use(
  cors({
    credentials: true,
    origin,
  })
);

app.use(express.json());

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
