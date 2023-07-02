const Product = require("../models/product.model");

exports.getProductDetails = (req, res, next) => {
  Product.getSingleProduct(req.params.productId, (product) => {
    res.render("details", { item: product, pageTitle: product.title });
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.params.productId;
  return Product.getSingleProduct(productId, (product) => {
    return req.user.addToCart(product);
  });
};

exports.getCart = (req, res, next) => {
  req.user.getCart((cart) =>
    res.render("cart", { products: cart, pageTitle: "Cart" })
  );
};
