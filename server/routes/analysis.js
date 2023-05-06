const express = require("express");
const { PurchasedProduct, TreatmentHistory } = require("../database/schemas");

const router = express.Router();

router.get("/getPurchasedProducts", async (req, res) => {
  try {
    const purchasedProducts = await PurchasedProduct.find({});
    res.status(200).json(purchasedProducts);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ message: "getting purchased products failed", error });
  }
});

router.get("/getTreatmentHistory", async (req, res) => {
  try {
    const treatmentHistory = await TreatmentHistory.find({});
    res.status(200).json(treatmentHistory);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ message: "getting treatment history failed", error });
  }
});

module.exports = router;
