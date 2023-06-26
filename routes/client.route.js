const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client.controller");

router.use("/", clientController.getMainPage);

module.exports = router;
