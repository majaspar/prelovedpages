const router = require('express').Router();

const { addCopy, updateCopy, deleteCopy, getCopies, oneCopy } = require('../controllers/availableCopyController')


// Pages    /api/copies
router.route('/').get(getCopies);
router.route('/:copyid').get(oneCopy);

router.route('/:id/addcopy').post(addCopy);
router.route('/:id/update').patch(updateCopy);
router.route('/:id/delete').delete(deleteCopy);

module.exports = router;