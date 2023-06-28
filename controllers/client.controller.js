const Product = require("../models/product.model");

exports.getMainPage = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("shop", { products, pageTitle: "Shopping" });
  });
};
