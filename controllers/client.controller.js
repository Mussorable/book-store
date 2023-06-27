const setConnectDB = require("../database/connect.db").setConnectDB;

exports.getMainPage = (req, res, next) => {
  const data = [];
  setConnectDB((db) => {
    const books = db.collection("books");
    books
      .find()
      .toArray()
      .then((result) => {
        res.render("shop", { products: result, pageTitle: "Shopping" });
      })
      .catch((error) => console.error(error));
  });
};
