const Book = require('../models/Book')
const Author = require('../models/Author')
const AvailableCopy = require('../models/AvailableCopy')

const asyncHandler = require('express-async-handler')
// /api/authors/
// const allAuthors = asyncHandler(async (req, res) => {
//     const authors = await Author.find({}).sort({ createdAt: -1 })
//     res.json(authors)
//  })

// /api/copies/
const getCopies = asyncHandler(async (req, res) => {
  const allCopies = await AvailableCopy.find({}).sort({ createdAt: -1 })
  res.json(allCopies)
})

// /api/copies/:copyid/
const oneCopy = asyncHandler(async (req, res) => {
  const copy = await AvailableCopy.findById(req.params.copyid)
    .populate('bookModel')
    .populate('author')
    .exec()
  res.json(copy)
})

// /api/copies/add/
const addCopy = async (req, res) => {

  try {
    const { bookModelId, authorid, photo, publishingHouse, thisCopyDescription, isAvailable, price, ISBN } = req.body;

    const theAuthor = await Author.findOne({ _id: authorid })
      .populate().exec()

    const theBookModel = await Book.findOne({ _id: bookModelId })
      .populate().exec()

    const newAvailableCopy = new AvailableCopy({
      bookModel: bookModelId, author: authorid, photo, publishingHouse, thisCopyDescription, isAvailable, price, ISBN
    })
    await newAvailableCopy.save()
    console.log('Available Copy added successfully!')

    theAuthor.availableCopies.push(newAvailableCopy);
    await theAuthor.save()

    console.log('The Author saved successfully!')
    theBookModel.availableCopies.push(newAvailableCopy);
    await theBookModel.save()
    console.log('The Book Model saved successfully!')




  } catch (error) {
    console.log(error)
  }

}


module.exports = { addCopy, oneCopy, getCopies }

// const theAuthor = await Author.findById(req.params.id)

// const { title, isFeatured, isPartOfSeries, series, volume, publishedYear, date, cover, synopsis, genre, availableCopies } = req.body;

// const newBookModel = new Book({
//   title, author: theAuthor,
//   publishedYear, date,
//   cover, isFeatured, isPartOfSeries,
//   synopsis, series, volume,
//   genre, availableCopies
// });

// theAuthor.writtenBooks.push(newBookModel)
// await newBookModel.save()
// await theAuthor.save()

// console.log('Book Model added successfully!')

