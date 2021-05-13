const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

router.get("/list", userController.list);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
