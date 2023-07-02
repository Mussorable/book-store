const setConnectDB = require("../database/connect.db").setConnectDB;
const mongodb = require("mongodb");

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save() {
    setConnectDB((db) => {
      db.collection("users")
        .insertOne(this)
        .catch((error) => {
          throw error;
        });
    }).catch((error) => console.error(error));
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(
      (cp) => cp.productId.toString() === product._id.toString()
    );
    const cartItems = [...this.cart.items];

    if (cartProductIndex > 0) {
      const newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      cartItems[cartProductIndex].quantity = newQuantity;
    } else {
      cartItems.push({
        productId: new mongodb.ObjectId(product._id),
        quantity: 1,
      });
    }

    const updatedCart = {
      items: cartItems,
    };
    setConnectDB((db) => {
      return db
        .collection("users")
        .updateOne(
          { _id: new mongodb.ObjectId(this._id) },
          { $set: { cart: updatedCart } }
        );
    });
  }

  getCart(callback) {
    const productsIds = this.cart.items.map((product) => product.productId);
    setConnectDB((db) => {
      db.collection("books")
        .find({ _id: { $in: productsIds } })
        .toArray()
        .then((result) => {
          const finalResult = result.map((product) => {
            return {
              ...product,
              quantity: this.cart.items.find((item) => {
                return item.productId.toString() === product._id.toString();
              }).quantity,
            };
          });
          callback(finalResult);
        });
    });
  }

  static findById(id, callback) {
    setConnectDB((db) => {
      db.collection("users")
        .find({ _id: new mongodb.ObjectId(id) })
        .next()
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          throw error;
        });
    }).catch((error) => console.error(error));
  }
}

module.exports = User;
