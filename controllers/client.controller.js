exports.getMainPage = (req, res, next) => {
  res.render("shop", { pageTitle: "Shopping" });
};
