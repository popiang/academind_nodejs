const express = require("express");
const path = require("path");

const app = express();

const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(usersRoutes);
app.use(mainRoutes);

app.listen(4000);
