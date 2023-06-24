const express = require("express");
const path = require("path");

const pageController = require("../controllers/pageAccess.controller");
const productsController = require("../controllers/products.controller");

const router = express.Router();

router.get("/add-product", pageController.getAddProduct);

router.post("/add-product", productsController.setAddProduct);

module.exports = router;
