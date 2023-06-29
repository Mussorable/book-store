const setConnectDB = require("../database/connect.db").setConnectDB;
const mongodb = require("mongodb");

class Product {
  constructor(data) {
    this.title = data.title;
    this.price = data.price;
    this.author = data.author;
    this["image-link"] = data["image-link"];
  }

  async save() {
    setConnectDB((db) => {
      const books = db.collection("books");

      books.insertOne(this, (error) => {
        if (error) throw error;
      });
    }).catch((error) => console.error(error));
  }

  static getAllProducts(callback) {
    setConnectDB((db) => {
      const books = db.collection("books");
      books
        .find()
        .toArray()
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  static getSingleProduct(id, callback) {
    setConnectDB((db) => {
      const books = db
        .collection("books")
        .find({ _id: new mongodb.ObjectId(id) })
        .next()
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          throw error;
        });
    });
  }
}

module.exports = Product;
