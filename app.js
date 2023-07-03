const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const adminRoute = require("./routes/admin.route");
const clientRoute = require("./routes/client.route");
const productController = require("./routes/product.route");

// const User = require("./models/user.model");

const app = express();
// Explorer settings
app.set("views", "views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use((req, res, next) => {
//   User.findById("64a15d4d4425b09c74a17ed1", (user) => {
//     req.user = new User(user.name, user.email, user.cart, user._id);
//     next();
//   });
// });

app.use("/admin", adminRoute);
app.use("/product", productController);
app.use(clientRoute);

mongoose
  .connect(
    "mongodb+srv://Mussorable:qChxEQN1Q6rlS4Mg@cluster0.i83bgon.mongodb.net/shop?"
  )
  .then(() => app.listen(5173))
  .catch((error) => console.error(error));
