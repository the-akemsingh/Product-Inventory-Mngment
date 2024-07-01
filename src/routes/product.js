import express from "express";
import productController from "../controllers/product";

const router = express.Router();

router.get("/products", productController.getAllProducts);

router.get("/products/:id", productController.getProductbyId);

router.post("/products", productController.addnewProduct);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProducts);

export default router;