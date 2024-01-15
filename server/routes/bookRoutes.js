const router = require("express").Router();

const {
  addBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
  getFiction, getAllGenre
} = require("../controllers/bookController");

// Pages    /api/books
router.route("/").get(getBooks);
router.route("/:id").get(getBook);

// CRUD    /api/books
router.route("/:id/addbook").post(addBook);
router.route("/:authorid/:id/delete").delete(deleteBook);
router.route("/:id/update").patch(updateBook);

//GENRE      /api/books/genre/fiction

router.route("/genre/all/:genre").get(getAllGenre);
router.route("/genre/fiction").get(getFiction);
module.exports = router;
