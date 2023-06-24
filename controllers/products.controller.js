const Product = require("../models/product.model");

exports.setAddProduct = (req, res, next) => {
  const products = new Product(req.body["product-title"]);
  products.save();
  res.redirect("/");
};
