const { json } = require("body-parser");
const Book = require("../models/dashboard.model.js");

module.exports.render_dashboard = async (req, res) => {
    const newBook = new Book.Book();
    const allBooks = await newBook.fetchAll();
    res.render("dashboard", {
        allBooks: allBooks 
    });
};

module.exports.create_book = async (req, res) => {
    const { bookid, title } = req.body;
    const newBook = new Book.Book(bookid, title);
    await newBook.save(bookid, title);
    res.redirect('/dashboard');
};

module.exports.update_book = async (req, res) => {
    const { bookid, title } = req.body;
    const book = new Book.Book();
    await book.update(bookid, title);
    res.redirect('/dashboard');
};

module.exports.view_book = async (req, res) => {
    const bookid = req.params.bookid;
    const book = new Book.Book();
    const bookDetails = await book.get_book(bookid);
    res.render("viewBook", {
        book: bookDetails[0]
    });
};
