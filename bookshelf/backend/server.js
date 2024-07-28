const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Books = require("./models/book.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const books = require("./routes/booksRoute.js");
app.use(books);

app.get("/", (req, res) => {
	res.send("Welcome to Home Page");
});

mongoose
	.connect("mongodb://localhost/test")
	.then(() => {
		console.log("connected to database");
		app.listen(process.env.PORT || 3000, () => {
			console.log(`Server listening on port ${process.env.PORT || 3000}`);
		});
	})
	.catch((error) => {
		res.status(500).send("Unable to connect to database");
	});
