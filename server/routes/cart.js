const express = require("express");
const router = express.Router();
const protect = require("../app/middleware/protect");

const cartController = require("../app/controllers/cartController.js");

router.use(protect);

router
  .get("/:id", cartController.getUserCart)
  .patch("/:id", cartController.updateCart);

module.exports = router;
