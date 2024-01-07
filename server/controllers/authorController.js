const Author = require('../models/Author')
const Book = require('../models/Book')
const AvailableCopy = require('../models/AvailableCopy')
const asyncHandler = require('express-async-handler')


// Pages

// /api/authors/
const allAuthors = asyncHandler(async (req, res) => {
   const authors = await Author.find({}).sort({ lastName: 1 })
   .populate('writtenBooks').exec()
   res.json(authors)
})

// /api/authors/:id 
const oneAuthor = asyncHandler(async (req, res) => {
   const author = await Author.findOne({ _id: req.params.id })
   .populate('writtenBooks').exec()
   res.json(author)
})



// authors/:add
const addAuthor = async (req, res) => {
   try {
      const { firstName, 
         lastName, 
         originalLanguage, 
         born, 
         country, 
         photo, 
         photoSource } = req.body;

      const newAuthor = new Author({
         firstName, lastName, originalLanguage, born, country, photo, photoSource
      });

      await newAuthor.save()
      res.json(newAuthor)

   } catch (error) {
      console.log(error)
   }

}
// authors/:id/update
const updateAuthor = async (req, res) => {
   try {
      const { firstName, 
         lastName, 
         originalLanguage, 
         born, 
         country, 
         photo, 
         photoSource } = req.body;

      const newAuthor = new Author({
         firstName, lastName, originalLanguage, born, country, photo, photoSource
      });

      await newAuthor.save()
      res.json(newAuthor)

   } catch (error) {
      console.log(error)
   }

}
const deleteAuthor = async (req, res) => {
   try {
      await Author.findByIdAndDelete(req.params.id)
      console.log('Author deleted successfully.')
      res.status(201)
    } catch (error) {
      console.log(error)
    }
}
module.exports = { addAuthor, allAuthors, oneAuthor, deleteAuthor, updateAuthor }