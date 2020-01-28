const { getBooks, getBook, deleteBookFromList, addBookToTheList, editBook } = require('../model/books_model');

function drawTable(req, res) {
    const bookList = getBooks();
    res.render('home', { bookList });
}

function goToEditPage(req, res) {
    const bookToModify = getBook(req.query.id);
    res.render('edit', { bookToModify });
}

function goToDeletePage(req, res) {
    const bookToDelete = getBook(req.query.id);
    res.render('delete', { bookToDelete })
}

function goToAddNewBookPage(req, res) {
    res.render('new');
}

function modifyBook(req, res) {
    editBook(req.params.id, req.body);
    res.status(301).redirect('/books.html')
}

function deleteBook(req, res) {
    deleteBookFromList(req.params.id);
    res.status(301).redirect('/books.html');
}

function addBook(req, res) {
    addBookToTheList(req.body);
    res.redirect('/books.html');
}

module.exports = { drawTable, goToEditPage, goToDeletePage, deleteBook, goToAddNewBookPage, addBook, modifyBook }