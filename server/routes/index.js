const express = require("express");

const auth = require("./auth");
const products = require("./products");
const clients = require("./clients");
const treatments = require("./treatments");
const events = require("./events");
const treatmentHistory = require("./treatmentHistory");
const user = require("./user");
const analysis = require("./analysis");
const router = express.Router();

router.use("/api/auth", auth);
router.use("/api/products", products);
router.use("/api/clients", clients);
router.use("/api/treatments", treatments);
router.use("/api/events", events);
router.use("/api/treatmentHistory", treatmentHistory);
router.use("/api/user", user);
router.use("/api/analysis", analysis);
module.exports = router;
