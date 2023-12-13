const router = require('express').Router();

const { addBook, getBooks, getBook } = require('../controllers/bookController')


// Pages    /api/books
router.route('/').get(getBooks);
router.route('/:id').get(getBook);

// Pages    /api/books
router.route('/:id/addbook').post(addBook);

module.exports = router;