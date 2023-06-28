const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.use("/details/:productId", productController.getProductDetails);

module.exports = router;
