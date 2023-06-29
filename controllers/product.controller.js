const Product = require("../models/product.model");

exports.getProductDetails = (req, res, next) => {
  Product.getSingleProduct(req.params.productId, (product) => {
    res.render("details", { item: product, pageTitle: product.title });
  });
};
