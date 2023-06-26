const express = require("express");

const adminRoute = require("./routes/admin.route");
const clientRoute = require("./routes/client.route");

const app = express();
// Explorer settings
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/admin", adminRoute);
app.use(clientRoute);

app.listen(5173);
