const express = require("express");
const { TreatmentHistory } = require("../database/schemas");

const router = express.Router();
router.post("/newTreatmentHistory", async (req, res) => {
  const treatmentHistory = req.body;

  const newTreatmentHistory = await new TreatmentHistory({
    fullName: treatmentHistory.fullName,
    treatmentName: treatmentHistory.treatmentName,
    date: treatmentHistory.date,
  });

  TreatmentHistory.find(
    { treatmentName: treatmentHistory.treatmentName },
    (err, client) => {
      if (err) {
        res.status(400).send({ message: "Error in find function", err });
        return;
      }

      newTreatmentHistory.save((err, savedTreatmentHistory) => {
        if (err || !savedTreatmentHistory) {
          res
            .status(400)
            .send({ message: "Saving treatment history failed", err });
        } else {
          res.status(200).json(savedTreatmentHistory);
        }
      });
    }
  );
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

module.exports = router;
