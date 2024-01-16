const router = require("express").Router();

const {
  addBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
  getLatest,getLatestComponent,
  getAllGenre,
} = require("../controllers/bookController");

// Pages    /api/books
router.route("/").get(getBooks);
router.route("/book/:id").get(getBook);
router.route("/latest").get(getLatest);
router.route("/latestcomponent").get(getLatestComponent);

// CRUD    /api/books
router.route("/:id/addbook").post(addBook);
router.route("/:authorid/:id/delete").delete(deleteBook);
router.route("/:id/update").patch(updateBook);

//GENRE      /api/books/genre/fiction

router.route("/genre/all/:genre").get(getAllGenre);
module.exports = router;
