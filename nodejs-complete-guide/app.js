const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	// res.status(404).send("<h1>Page not found!!</h1>");
	res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(3000);
