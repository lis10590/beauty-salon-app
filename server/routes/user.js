const express = require("express");
const changePassword = require("../Controllers/user").changePassword;

const router = express.Router();

module.exports = router;

router.put("/changepassword", changePassword);
