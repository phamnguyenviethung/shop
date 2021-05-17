const express = require("express");
const router = express.Router();

const cartController = require("../app/controllers/CartController");

router.get("/:id", cartController.getCart);
router.post("/update", cartController.updateCart);

module.exports = router;
