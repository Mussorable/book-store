const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client.controller");

router.get("/add-product", clientController.getAddProduct);

module.exports = router;
