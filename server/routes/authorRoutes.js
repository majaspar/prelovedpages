const router = require('express').Router();

const { addAuthor, oneAuthor, allAuthors } = require('../controllers/authorController')

// Pages    /api/authors
router.route('/').get(allAuthors);
router.route('/:id').get(oneAuthor);

// Admin    /api/authors
router.route('/add').post(addAuthor);


module.exports = router;