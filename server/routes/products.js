const express = require("express");
const { Product } = require("../database/schemas");

const router = express.Router();

router.post("/newProduct", async (req, res) => {
  const product = req.body;

  const newProduct = await new Product({
    productName: product.productName,
    manufacturer: product.manufacturer,
    productType: product.productType,
    productGroup: product.productGroup,
    price: product.price,
  });

  Product.find({ productName: product.productName }, (err, product) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }
    if (product[0]) {
      res.status(400).send({ message: "Product exists" });
      return;
    }

    newProduct.save((err, savedProduct) => {
      if (err || !savedProduct) {
        res.status(400).send({ message: "Saving product failed", err });
      } else {
        res.status(200).json(savedProduct);
      }
    });
  });
});

router.get("/getProducts", (req, res) => {
  Product.find({}, (err, productsList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(
      // message: "Products are rendered successfully".,
      productsList
    );
  });
});

router.delete("/deleteProduct", (req, res) => {
  console.log(req.body.productId);
  const product = Product.findByIdAndRemove(req.body.productId, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Removed Product : ", doc);
      res.status(200).json({ id: req.body.productId });
    }
  });
  if (!product) {
    res.status(400).send({ message: "product was not found" });
  }
});

module.exports = router;
