const express = require("express");
const router = express.Router();
const verify = require("../app/middleware/verifyToken");

const cartController = require("../app/controllers/cartController");

router.get("/:id", cartController.getUserCart);
router.patch("/:id", cartController.updateCart);

module.exports = router;
