import express from "express";
import productController from "../controllers/product";

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductbyId);

router.post("/", productController.addnewProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProducts);

export default router;