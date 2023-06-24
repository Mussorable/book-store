const express = require("express");
const path = require("path");

//
const pageController = require("../controllers/pageAccess.controller");

const router = express.Router();

router.use("/", pageController.getHomePage);

module.exports = router;
