const express = require("express");
const router = express.Router();

const verify = require("../app/middleware/verifyToken");

const userController = require("../app/controllers/UserController");

router.get("/list", userController.list);
router.post("/register", userController.register);
router.post("/test", verify, userController.test);
router.post("/login", userController.login);
router.post("/refresh", userController.refreshToken);

module.exports = router;
