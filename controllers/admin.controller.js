const Product = require("../models/product.model");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body);
  product.save().finally(() => res.redirect("/"));
};
