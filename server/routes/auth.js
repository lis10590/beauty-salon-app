const express = require("express");

const router = express.Router();

module.exports = router;

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send({ message: "data sent successfully" });
});
