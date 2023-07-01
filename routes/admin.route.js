const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);
router.get("/products", adminController.getAdminProductsPage);
router.get("/products/:productId", adminController.getEditProduct);

module.exports = router;
