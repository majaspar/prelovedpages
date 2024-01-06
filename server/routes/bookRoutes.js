const router = require('express').Router();

const { addBook, updateBook, deleteBook, getBooks, getBook } = require('../controllers/bookController')


// Pages    /api/books
router.route('/').get(getBooks);
router.route('/:id').get(getBook);

// CRUD    /api/books
router.route('/:id/addbook').post(addBook);
router.route('/:id/delete').delete(deleteBook);
router.route('/:id/update').patch(updateBook);

module.exports = router;