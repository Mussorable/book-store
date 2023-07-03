const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// const setConnectDB = require("../database/connect.db").setConnectDB;
// const mongodb = require("mongodb");

// class Product {
//   constructor(data, userId) {
//     this.title = data.title;
//     this.price = data.price;
//     this.author = data.author;
//     this["image-link"] = data["image-link"];
//     this.description = data.description ? data.description : "";
//     this._id = data.id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   async save() {
//     setConnectDB((db) => {
//       if (this._id) {
//         const { _id, ...rest } = this;
//         db.collection("books").updateOne(
//           { _id: this._id },
//           {
//             $set: rest,
//           }
//         );
//       } else {
//         db.collection("books").insertOne(this);
//       }
//     }).catch((error) => console.error(error));
//   }

//   static getAllProducts(callback) {
//     setConnectDB((db) => {
//       const books = db.collection("books");
//       books
//         .find()
//         .toArray()
//         .then((result) => {
//           callback(result);
//         })
//         .catch((error) => {
//           throw error;
//         });
//     });
//   }

//   static getSingleProduct(id, callback) {
//     setConnectDB((db) => {
//       db.collection("books")
//         .find({ _id: new mongodb.ObjectId(id) })
//         .next()
//         .then((result) => {
//           callback(result);
//         })
//         .catch((error) => {
//           throw error;
//         });
//     });
//   }

//   static deleteById(id) {
//     setConnectDB((db) => {
//       db.collection("books")
//         .deleteOne({ _id: new mongodb.ObjectId(id) })
//         .catch((error) => {
//           throw error;
//         });
//     });
//   }
// }

// module.exports = Product;
