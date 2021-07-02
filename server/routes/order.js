const express = require("express");
const router = express.Router();

const orderController = require("../app/controllers/orderController");

router.post("/create", orderController.create);
router.get("/", orderController.getAll);

module.exports = router;
