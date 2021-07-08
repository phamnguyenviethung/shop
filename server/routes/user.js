const express = require("express");
const router = express.Router();

const user = require("../app/controllers/userController");
const auth = require("../app/controllers/authController");

router.get("/", user.getAll);
router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/refresh", auth.refreshToken);

module.exports = router;
