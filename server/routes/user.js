const express = require("express");
const router = express.Router();

const user = require("../app/controllers/userController");
const auth = require("../app/controllers/authController");

const protect = require("../app/middleware/protect");
const restrict = require("../app/middleware/restrict");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.use(protect);

router.post("/refresh", auth.refreshToken);

router.use(restrict("admin"));

router.get("/", user.getAll);

module.exports = router;
