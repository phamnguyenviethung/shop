const express = require("express");
const router = express.Router();
const verify = require("../app/middleware/verifyToken");

const cartController = require("../app/controllers/CartController");

router.get("/:id", verify, cartController.getCart);
router.post("/update", verify, cartController.updateCart);

module.exports = router;
