const express = require("express");
const productController = require("../controllers/productController");
const isAuthorized = require("../middlewares/auth");

const router = express.Router();
router.use(isAuthorized);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductbyId);

router.get("/all/categories", productController.getCategories);

router.post("/", productController.addnewProduct);

router.post("/createCategory", productController.createCategory);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProducts);

module.exports = router;