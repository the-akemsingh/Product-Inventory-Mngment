const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductbyId);

router.post("/", productController.addnewProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProducts);

module.exports = router;