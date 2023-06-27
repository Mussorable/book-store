const setConnectDB = require("../database/connect.db").setConnectDB;

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  setConnectDB((db) => {
    const books = db.collection("books");

    books.insertOne(req.body, (error, result) => {
      if (error) throw error;
    });
  }).catch((error) => console.error(error));
  res.redirect("/");
};
