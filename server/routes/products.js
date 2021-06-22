const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/productController");

const verifyToken = require("../app/middleware/verifyToken");

router.get("/", productController.getAll);
router.get("/:slug", productController.getBySlug);
router.get("/:id", productController.getByID);

router.post("/", productController.create);
router.patch("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
