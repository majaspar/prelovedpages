const Author = require('../models/Author')
const Book = require('../models/Book')
const asyncHandler = require('express-async-handler')


// Pages

const allAuthors = asyncHandler(async (req, res) => {
   const authors = await Author.find({}).sort({ createdAt: -1 })
   res.json(authors)
})

const oneAuthor = asyncHandler(async (req, res) => {
   const author = await Author.findOne({ _id: req.params.id })
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