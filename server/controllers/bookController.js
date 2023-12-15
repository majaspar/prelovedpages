const Book = require('../models/Book');
const Author = require('../models/Author');
const asyncHandler = require('express-async-handler');

const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate('author')
    .exec();
  res.json(book)
})


const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().sort({ createdAt: -1 })
  res.json(books)
})


const addBook = async (req, res) => {
  try {
    const theAuthor = await Author.findById(req.params.id)

    const { title, isFeatured, isPartOfSeries, series, volume, publishedYear, date, cover, synopsis, genre, availableCopies } = req.body;

    const newBookModel = new Book({
      title, author: theAuthor,
      publishedYear, date,
      cover, isFeatured, isPartOfSeries,
      synopsis, series, volume,
      genre, availableCopies
    });

    theAuthor.writtenBooks.push(newBookModel)
    await newBookModel.save()
    await theAuthor.save()

    console.log('Book Model added successfully!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = { addBook, getBooks, getBook }