const router = require('express').Router();

const { addCopy, getCopies, oneCopy } = require('../controllers/availableCopyController')


// Pages    /api/copies
router.route('/').get(getCopies);
router.route('/:id').get(oneCopy);

router.route('/add').post(addCopy);

module.exports = router;