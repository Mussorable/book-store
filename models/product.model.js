const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "api", "products.json");
const getDataFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) cb([]);
    cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getDataFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static getProducts(cb) {
    getDataFromFile(cb);
  }
};
