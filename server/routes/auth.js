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
