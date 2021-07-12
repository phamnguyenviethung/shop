const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/productController");

const protect = require("../app/middleware/protect");
const restrict = require("../app/middleware/restrict");

router.get("/", productController.getAll);
router.get("/:slug", productController.getBySlug);
router.get("/:id", productController.getByID);

router.use(protect);
router.use(restrict("admin"));

router.post("/", productController.create);
router
  .patch("/:id", productController.update)
  .delete("/:id", productController.delete);

module.exports = router;
