const express = require("express");
const router = express.Router();

const productsController = require("../app/controllers/ProductsController");

router.get("/list", productsController.list);
router.post("/add", productsController.add);
router.put("/edit", productsController.edit);
router.delete("/delete/:id", productsController.delete);

module.exports = router;
