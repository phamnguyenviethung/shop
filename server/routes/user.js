const express = require("express");
const router = express.Router();

const user = require("../app/controllers/userController");

router.post("/register", user.register);
router.post("/login", user.login);
router.post("/refresh", user.refreshToken);

module.exports = router;
