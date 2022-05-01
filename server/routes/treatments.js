const express = require("express");
const { Treatment } = require("../database/schemas");

const router = express.Router();

router.post("/newTreatment", async (req, res) => {
  const treatment = req.body;

  const newTreatment = await new Treatment({
    treatmentName: treatment.treatmentName,
    price: treatment.price,
  });

  Treatment.find(
    { treatmentName: treatment.treatmentName },
    (err, treatment) => {
      if (err) {
        res.status(400).send({ message: "Error in find function", err });
        return;
      }
      if (treatment[0]) {
        res.status(400).send({ message: "Treatment exists" });
        return;
      }

      newTreatment.save((err, savedTreatment) => {
        if (err || !savedTreatment) {
          res.status(400).send({ message: "Saving treatment failed", err });
        } else {
          res.status(200).json(savedTreatment);
        }
      });
    }
  );
});

router.get("/getTreatments", (req, res) => {
  Treatment.find({}, (err, treatmentsList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(treatmentsList);
  });
});

router.delete("/deleteTreatment", (req, res) => {
  console.log(req.body.treatmentId);
  const treatment = Treatment.findByIdAndRemove(
    req.body.treatmentId,
    (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Removed Treatment : ", doc);
        res.status(200).json({ id: req.body.treatmentId });
      }
    }
  );
  if (!treatment) {
    res.status(400).send({ message: "treatment was not found" });
  }
});
module.exports = router;
