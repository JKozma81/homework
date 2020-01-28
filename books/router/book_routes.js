const express = require('express');

const booksCtrl = require('../controllers/books_controller')

const router = express.Router();


router.get('/books.html', booksCtrl.drawTable);
router.get('/edit.html', booksCtrl.goToEditPage);
router.post('/book/:id/edit', booksCtrl.modifyBook);
router.get('/delete.html', booksCtrl.goToDeletePage);
router.post('/book/:id/delete', booksCtrl.deleteBook);
router.get('/new-book.html', booksCtrl.goToAddNewBookPage);
router.post('/books', booksCtrl.addBook);


module.exports = router;
