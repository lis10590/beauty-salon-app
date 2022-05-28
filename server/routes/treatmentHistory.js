const express = require("express");
const { TreatmentHistory } = require("../database/schemas");

const router = express.Router();
router.post("/newTreatmentHistory", async (req, res) => {
  const treatmentHistory = req.body;

  const newTreatmentHistory = await new TreatmentHistory({
    fullName: treatmentHistory.fullName,
    phoneNumber: treatmentHistory.phoneNumber,
    treatmentName: treatmentHistory.title,
    date: treatmentHistory.start,
  });

  newTreatmentHistory.save((err, savedTreatmentHistory) => {
    if (err || !savedTreatmentHistory) {
      res.status(400).send({ message: "Saving treatment history failed", err });
    } else {
      res.status(200).json(savedTreatmentHistory);
    }
  });
});

router.get("/getTreatmentHistory", (req, res) => {
  TreatmentHistory.find({}, (err, treatmentHistoryList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(treatmentHistoryList);
  });
});

router.get("/getTreatmentHistoryByName", (req, res) => {
  const treatmentHistory = req.query;
  // console.log(req.query);
  TreatmentHistory.find(
    { fullName: treatmentHistory.fullName },
    (err, treatmentHistoryList) => {
      if (err) {
        res.status(400).send({ message: "Error in find function", err });
        return;
      }

      if (!treatmentHistoryList) {
        res.status(400).send({ message: "treatments are not found!", err });
        return;
      }

      res.send(treatmentHistoryList);
    }
  );
});

module.exports = router;
