const router = require('express').Router();

const { addCopy, getCopies, oneCopy } = require('../controllers/availableCopyController')


// Pages    /api/copies
router.route('/').get(getCopies);
router.route('/:copyid').get(oneCopy);

router.route('/add').post(addCopy);

module.exports = router;