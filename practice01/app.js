const express = require("express");
const path = require("path");
const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");
const errorRoutes = require("./routes/error");

const app = express();

// static resource
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(mainRoutes);
app.use(usersRoutes);
app.use(errorRoutes);

app.listen(3000);
