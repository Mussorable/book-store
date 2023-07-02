const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client.controller");
const productController = require("../controllers/product.controller");

router.get("/cart", productController.getCart);
router.get("/set-order", productController.postOrder);
router.use("/", clientController.getMainPage);

module.exports = router;
