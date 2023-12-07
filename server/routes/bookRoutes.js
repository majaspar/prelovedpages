const router = require('express').Router();

const { bookAdd, getBooks } = require('../controllers/bookController')


router.route('/').get(getBooks);

router.route('/add').post(bookAdd);

module.exports = router;