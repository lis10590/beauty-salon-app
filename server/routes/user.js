const express = require("express");
const { User } = require("../database/schemas");

const router = express.Router();

module.exports = router;

router.get("/getUser", (req, res) => {
  const userName = req.query.username;

  User.find({ username: userName }, (err, user) => {
    if (err) {
      res.status(400).send({ message: "User access is not possible", err });
    }
    if (!user[0]) {
      res.status(400).send({ message: "Username doesn't exist" });
    }
    console.log(user);

    res.send({ message: "Username exists", user: user[0] });
  });
});
