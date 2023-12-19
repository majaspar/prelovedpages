const Author = require('../models/Author')
const Book = require('../models/Book')
const asyncHandler = require('express-async-handler')


// Pages

// /api/authors/
const allAuthors = asyncHandler(async (req, res) => {
   const authors = await Author.find({}).sort({ lastName: 1 })
   res.json(authors)
})

// /api/authors/:id 
const oneAuthor = asyncHandler(async (req, res) => {
   const author = await Author.findOne({ _id: req.params.id })
   .populate('writtenBooks').exec()
   res.json(author)
})



// Admin

const addAuthor = async (req, res) => {
   try {
      const { firstName, lastName, originalLanguage, isAlive, country } = req.body;

      const newAuthorModel = new Author({
         firstName, lastName, originalLanguage, isAlive, country
      });

      await newAuthorModel.save()
      res.json(newAuthorModel)

   } catch (error) {
      console.log(error)
   }

}

module.exports = { addAuthor, allAuthors, oneAuthor }