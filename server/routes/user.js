const express = require("express");

const registerUser = require("../Controllers/user").registerUser;
const loginUser = require("../Controllers/user").loginUser;
const getUser = require("../Controllers/user").getUser;
const protect = require("../middleware/authMiddleware").protect;

const router = express.Router();

module.exports = router;

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUser);

// router.get("/getUser", (req, res) => {
//   const userName = req.query.username;

//   User.find({ username: userName }, (err, user) => {
//     if (err) {
//       res.status(400).send({ message: "User access is not possible", err });
//     }
//     if (!user[0]) {
//       res.status(400).send({ message: "Username doesn't exist" });
//     }
//     console.log(user);

//     res.send({ message: "Username exists", user: user[0] });
//   });
// });
