const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/verifyToken");

const userController = require("../app/controllers/UserController");

router.get("/list", userController.list);
router.get("/test", verifyToken, userController.test);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
