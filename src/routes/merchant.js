const express = require("express");
const merchantController = require("../controllers/merchantController");
const router = express.Router();

router.post("/register", merchantController.registerMerchant);

router.post("/login", merchantController.loginMerchant);

module.exports = router;