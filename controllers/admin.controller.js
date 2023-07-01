const Product = require("../models/product.model");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body);
  product.save().finally(() => res.redirect("/"));
};

exports.getAdminProductsPage = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("admin-products", { products, pageTitle: "Admin Panel" });
  });
};

exports.getEditProduct = (req, res, next) => {
  // const editMode = req.query;
  // console.log(editMode);
  // if (!editMode) {
  //   return res.redirect("/");
  // }

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
