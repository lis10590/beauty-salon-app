const express = require("express");
const { Event } = require("../database/schemas");

const router = express.Router();

module.exports = router;

router.post("/createEvent", async (req, res) => {
  const event = Event(req.body);
  await event.save();
  res.status(201).send({ message: "event saved successfully to db" });
});
