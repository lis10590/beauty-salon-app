const express = require("express");
const { Event } = require("../database/schemas");

const router = express.Router();
router.post("/newEvent", async (req, res) => {
  const event = req.body;

  const newEvent = await new Event({
    title: event.title,
    start: event.start,
    end: event.end,
    clientName: event.fullName,
    phoneNumber: event.phoneNumber,
  });

  newEvent.save((err, savedEvent) => {
    if (err || !savedEvent) {
      res.status(400).send({ message: "Saving event failed", err });
    } else {
      res.status(200).json(savedEvent);
    }
  });
});

router.get("/getEvents", (req, res) => {
  Event.find({}, (err, eventsList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(eventsList);
  });
});

router.delete("/deleteEvent", (req, res) => {
  console.log(req.body.eventId);
  const event = Event.findByIdAndRemove(req.body.eventId, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Removed Event : ", doc);
      res.status(200).json({ id: req.body.eventId });
    }
  });
  if (!event) {
    res.status(400).send({ message: "event was not found" });
  }
});

module.exports = router;
