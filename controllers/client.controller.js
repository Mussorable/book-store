const Product = require("../models/product.model");

exports.getMainPage = (req, res, next) => {
  Product.find().then((products) =>
    res.render("shop", { products, pageTitle: "Shopping" })
  );
};
