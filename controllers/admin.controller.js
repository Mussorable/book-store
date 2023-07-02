const mongodb = require("mongodb");
const Product = require("../models/product.model");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body);
  product.save().finally(() => res.redirect("/"));
};

exports.postUpdateProduct = (req, res, next) => {
  const product = new Product(req.body);
  product.save();
  res.redirect("/");
};

exports.getAdminProductsPage = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("admin-products", { products, pageTitle: "Admin Panel" });
  });
};

exports.getEditProduct = (req, res, next) => {
  Product.getSingleProduct(req.params.productId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("edit-product", {
      item: product,
      pageTitle: `Edit ${product.title}`,
    });
  });
};

exports.getDeleteProduct = (req, res, next) => {
  Product.deleteById(req.params.productId);
  res.redirect("/");
};
