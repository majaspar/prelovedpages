const router = require('express').Router();

const { addAuthor, getAuthors } = require('../controllers/authorController')


router.route('/').get(getAuthors);

router.route('/add').post(addAuthor);

module.exports = router;