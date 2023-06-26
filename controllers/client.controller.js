exports.getMainPage = (req, res, next) => {
  res.render("shop", { pageTitle: "Shopping" });
};

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};
