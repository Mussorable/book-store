const Product = require("../models/product.model");

exports.getHomePage = (req, res, next) => {
  Product.getProducts((products) => {
    res.render("home", { products });
  });
};

exports.get404Page = (req, res, next) => {
  res.status(404).render("404", { title: "Page Not Found!" });
};

exports.getAddProduct = (req, res, next) => {
  res.render("add-product");
};
