const { books, Book } = require('../db/booksDB');

function getBooks() {
    return books;
}

function getBook(id) {
    return books.find(book => book.id === Number(id));
}

function deleteBookFromList(id) {
    const idx = books.findIndex(book => book.id === Number(id));
    books.splice(idx, 1);
}

function addBookToTheList(info) {
    const { title, author } = info;
    books.push(new Book(title, author));
}

function editBook(modId, book) {
    const bookToModify = getBook(modId);
    bookToModify.author = book.author ? book.author : bookToModify.author;
    bookToModify.title = book.title ? book.title : bookToModify.title;
}

module.exports = { getBooks, getBook, deleteBookFromList, addBookToTheList, editBook }