const express = require("express");

const { User } = require("../database/schemas");

const router = express.Router();

module.exports = router;

router.post("/register", (req, res) => {
  const user = req.body;

  const newUser = new User({
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    password: user.password,
  });
  User.find({ email: user.email }, (err, user) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }
    if (user[0]) {
      res.status(400).send({ message: "Username exists" });
      return;
    }

    newUser.save((err, savedUser) => {
      if (err || !savedUser) {
        res.status(400).send({ message: "Create user failed", err });
      } else {
        res.send({
          message: "User created successfully",
        });
      }
    });
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.send({ message: "success" });
});
