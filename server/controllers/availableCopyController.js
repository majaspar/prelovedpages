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

// /api/copies/:id/
const oneCopy = asyncHandler(async (req, res) => {
    const copy = await AvailableCopy.findById(req.params.id)
        .populate('bookModel')
        .populate('author')
        .exec()
    res.json(copy)
})

// /api/copies/add/
const addCopy = async (req, res) => {

    //const theBookModel = await Book.findById(req.params.id)
    //.populate().exec()

    // const author = req.body;
    // const theAuthor = await Author.find({ _id: author })
    // .populate().exec()
  try {
     const { bookModel, author, photo, publishingHouse, thisCopyDescription, isAvailable, price, ISBN} = req.body;

    const newAvailableCopy = new AvailableCopy({
        bookModel, author, photo, publishingHouse, thisCopyDescription, isAvailable, price, ISBN
    })
    await newAvailableCopy.save()
    console.log('Available Copy added successfully!')
    
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

