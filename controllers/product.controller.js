const Product = require("../models/product.model");

exports.getProductDetails = (req, res, next) => {
  Product.findById(req.params.productId).then((product) =>
    res.render("details", { item: product, pageTitle: product.title })
  );
};

exports.postCart = (req, res, next) => {
  const productId = req.params.productId;
  return Product.getSingleProduct(productId, (product) => {
    req.user.addToCart(product);
    res.redirect("/");
  });
};

exports.getCart = (req, res, next) => {
  req.user.getCart((cart) =>
    res.render("cart", { products: cart, pageTitle: "Cart" })
  );
};

exports.postCartDeleteProduct = (req, res, next) => {
  req.user.deleteItemFromCart(req.params.productId);
  res.redirect("/cart");
};

exports.postOrder = (req, res, next) => {
  req.user.addOrder();
  res.redirect("/orders");
};
