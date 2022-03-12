const express = require("express");

const auth = require("./auth");
const calendar = require("./calendar");
const router = express.Router();

router.use("/api/auth", auth);
router.use("/api/calendar", calendar);

module.exports = router;
