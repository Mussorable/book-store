const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin.route");
const clientRoute = require("./routes/client.route");

const app = express();
// Explorer settings
app.set("views", "views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/admin", adminRoute);
app.use(clientRoute);

app.listen(5173);
