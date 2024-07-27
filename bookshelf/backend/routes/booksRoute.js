const express = require("express");
const router = express.Router();
const Books = require("../models/book.js");

// Get all books
router.get("/books", async (req, res) => {
	const books = await Books.find();
	res.send(books);
});

// create a new book
router.post("/books/create", async (req, res) => {
	if (!req.body.title || !req.body.author || !req.body.publishYear) {
		return res.status(400).send("Please fill all fields");
	}
	const newBook = {
		title: req.body.title,
		author: req.body.author,
		publishYear: req.body.publishYear,
	};
	try {
		await Books.create(newBook);
		res.status(201).send("New Book Added Successfully");
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
});

// update an existing book
router.put("/books/update/:id", async (req, res) => {
	if (!req.body.title || !req.body.author || !req.body.publishYear) {
		return res.status(400).send("Please fill all fields");
	}

	try {
		const newBook = {
			title: req.body.title,
			author: req.body.author,
			publishYear: req.body.publishYear,
		};
		await Books.findByIdAndUpdate(req.params.id, newBook);
		res.send("Book Updated Successfully");
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

// delete an existing book by ID
router.delete("/books/delete/:id", async (req, res) => {
	try {
		await Books.deleteOne({ _id: req.params.id });
		res.send("Book Deleted Successfully");
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

// Get single book
router.get("/books/:id", async (req, res) => {
	const book = await Books.findById(req.params.id);
	res.send(book);
});

module.exports = router;
