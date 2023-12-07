const Book = require('../models/Book');
const asyncHandler  = require('express-async-handler');

const getBooks = asyncHandler(async (req, res) => {
   const books = await Book.find()
res.json(books)
  })

const bookAdd = asyncHandler(async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const publishedYear = req.body.publishedYear;
    const date = Date.parse(req.body.date);
    const cover = req.body.cover;
    const synopsis = req.body.synopsis;
    const genre = req.body.genre;
    const availableCopies = req.body.availableCopies;
  
  
    const newBookModel = new Book({
      title,
      author,
      publishedYear,
      date,
      cover,
      synopsis,
      genre,
      availableCopies
    });
  
    await newBookModel.save()
    
    res.json(newBookModel)
  })
    // const { title, author, description, createdAt, publishedYear, editionYear } = req.body;


module.exports = { bookAdd, getBooks }