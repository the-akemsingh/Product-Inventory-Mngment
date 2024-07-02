import express from "express";

const router = express.Router();

router.post("/register", merchantController.registerMerchant);

router.post("/login", merchantController.loginMerchant);


export default router;