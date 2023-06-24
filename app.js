const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//
const pageAccess = require("./controllers/pageAccess.controller");
const shopRoutes = require("./routes/shop.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

//
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(pageAccess.get404Page);

app.listen(5173);
