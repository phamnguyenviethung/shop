const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

router.get("/list", userController.list);
router.get("/cart/:id", userController.getCart);
router.post("/cart/:id", userController.updateCart);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
