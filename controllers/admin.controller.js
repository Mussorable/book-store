const mongodb = require("mongodb");
const Product = require("../models/product.model");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    imageUrl: req.body["image-link"],
    userId: req.user,
  });
  product
    .save()
    .then(() => res.redirect("/"))
    .catch((error) => console.error(error));
};

exports.postUpdateProduct = (req, res, next) => {
  Product.findById(req.body.id)
    .then((product) => {
      console.log(req.body);
      product.title = req.body.title;
      product.description = req.body.description;
      product.imageUrl = req.body.imageUrl;
      product.author = req.body.author;
      product.price = req.body.price;
      return product.save();
    })
    .then((result) => res.redirect("/"));
};

exports.getAdminProductsPage = (req, res, next) => {
  Product.find().then((products) => {
    res.render("admin-products", { products, pageTitle: "Admin Panel" });
  });
};

exports.getEditProduct = (req, res, next) => {
  Product.findById(req.params.productId).then((product) => {
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
  Product.findByIdAndRemove(req.params.productId).then(() => res.redirect("/"));
};
