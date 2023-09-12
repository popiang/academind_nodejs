const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
// 	console.log("First middleware!!");
// 	next();
// });

// app.use("/", (req, res, next) => {
// 	console.log("Second middleware!!");
// 	res.send("Hello from assignment02!!!");
// });

app.use("/users", (req, res, next) => {
	res.send("<h2>Users page!!</h2>");
})

app.use("/", (req, res, next) => {
	res.send("<h1>Home page!!</h1>");
})

app.listen(4000);

