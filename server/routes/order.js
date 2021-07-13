const express = require("express");
const router = express.Router();
const orderController = require("../app/controllers/orderController");
const protect = require("../app/middleware/protect");
const restrict = require("../app/middleware/restrict");

router.use(protect);
router.post("/create", orderController.create);
router.get("/user/:uid", orderController.getByUID);

router.use(restrict("admin"));
router.get("/", orderController.getAll);
router.get("/:id", orderController.getOne);

module.exports = router;
