const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const adminRoute = require("./routes/admin.route");
const clientRoute = require("./routes/client.route");
const productController = require("./routes/product.route");

const User = require("./models/user.model");

const app = express();
// Explorer settings
app.set("views", "views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  User.findById("64a319b8db46c1c73fdce003").then((user) => {
    req.user = user;
    next();
  });
});

app.use("/admin", adminRoute);
app.use("/product", productController);
app.use(clientRoute);

mongoose
  .connect(
    "mongodb+srv://Mussorable:qChxEQN1Q6rlS4Mg@cluster0.i83bgon.mongodb.net/shop?"
  )
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Olek",
          email: "oleh@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
      app.listen(5173);
    });
  })
  .catch((error) => console.error(error));
