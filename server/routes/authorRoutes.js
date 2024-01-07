const router = require('express').Router();

const { addAuthor, updateAuthor, deleteAuthor, oneAuthor, allAuthors } = require('../controllers/authorController')

// Pages    /api/authors
router.route('/').get(allAuthors);
router.route('/:id').get(oneAuthor);

// Admin    /api/authors
router.route('/add').post(addAuthor);
router.route('/:id/delete').delete(deleteAuthor);
router.route('/:id/update').patch(updateAuthor);


module.exports = router;