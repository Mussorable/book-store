const setConnectDB = require("../database/connect.db").setConnectDB;
const mongodb = require("mongodb");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
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
