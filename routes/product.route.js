const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.use("/details/:productId", productController.getProductDetails);
router.get("/cart/:productId", productController.postCart);

module.exports = router;
