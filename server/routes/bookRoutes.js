const router = require('express').Router();

const { addBook, getBooks, getBook } = require('../controllers/bookController')


router.route('/').get(getBooks);
router.route('/:id').get(getBook);

router.route('/:authors/addbook').post(addBook);

module.exports = router;