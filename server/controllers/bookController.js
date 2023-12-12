const Book = require('../models/Book');
const Author = require('../models/Author');
const asyncHandler = require('express-async-handler');

const getBook = asyncHandler(async (req, res) => {

  const book = await Book.findOne({ _id: req.params.id })
    .populate('author')
    .exec();
  res.json(book)
})
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()
  res.json(books)
})
const addBook = async (req, res) => {
  const authorId = req.params
  const { title, publishedYear, date, cover, synopsis, genre, availableCopies } = req.body;
  
  const theAuthor = Author.findOne({ id: authorId })

  const newBookModel = new Book({
    title,
    author: authorId,
    publishedYear,
    date,
    cover,
    synopsis,
    genre,
    availableCopies
  });

  await newBookModel.save()
  
  theAuthor.writtenBooks.push(newBookModel)

  theAuthor.save()

  res.json(newBookModel)
}
// const { title, author, description, createdAt, publishedYear, editionYear } = req.body;


module.exports = { addBook, getBooks, getBook }