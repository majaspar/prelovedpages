const Book = require('../models/Book');
const Author = require('../models/Author');
const asyncHandler = require('express-async-handler');

// Pages    /api/books/:id
const getBook = asyncHandler(async (req, res) => {
  const bookModel = await Book.findById(req.params.id)
    .populate('author')
    .exec();
  res.json(bookModel)
})

// Pages    /api/books/
const getBooks = asyncHandler(async (req, res) => {
  const bookModels = await Book.find().sort({ createdAt: -1 })
    .populate('author')
    .exec()
  res.json(bookModels)
})


// Pages    /api/books/:id/addbook
const addBook = async (req, res) => {
  try {
    const theAuthor = await Author.findById(req.params.id)

    const { title, 
      isFeatured, 
      isPartOfSeries, 
      series, volume, 
      publishedYear, date, 
      cover, synopsis, 
      genre, availableCopies } = req.body;

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

//delete /api/books/:id/delete
const deleteBook = async (req, res) => {

  try {
    await Book.findByIdAndDelete(req.params.id)
    console.log('Book deleted successfully.')
    res.status(201)
  } catch (error) {
    console.log(error)
  }
}

//update /api/books/:id/update
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id)

    const { title, author, 
      publishedYear, 
      cover, isFeatured, 
      isPartOfSeries, 
      synopsis, 
      series, 
      volume, 
      genre } = req.body
    
    updatedBook.title = title
    updatedBook.author = author
    updatedBook.publishedYear = publishedYear
    updatedBook.cover = cover
    updatedBook.isFeatured = isFeatured
    updatedBook.isPartOfSeries = isPartOfSeries
    updatedBook.synopsis = synopsis
    updatedBook.series = series
    updatedBook.volume = volume
    updatedBook.genre = genre

  await updatedBook.save()
    res.json(updatedBook)
    console.log('Book updated successfully.')
  } catch (error) {
    console.log(error)
  }
}

module.exports = { addBook, getBooks, getBook, deleteBook, updateBook }