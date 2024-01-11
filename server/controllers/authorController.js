const Author = require('../models/Author')
const asyncHandler = require('express-async-handler')


// /api/authors/
const allAuthors = asyncHandler(async (req, res) => {
   const authors = await Author.find({}).sort({ lastName: 1 })
   .populate('writtenBooks')
   .exec()
   res.json(authors)
})

// /api/authors/:id 
const oneAuthor = asyncHandler(async (req, res) => {
   const author = await Author.findById(req.params.id)
   .populate('writtenBooks')
   .exec()
   res.json(author)
})

// authors/add
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
         firstName, 
         lastName, 
         originalLanguage, 
         born, 
         country, 
         photo, 
         photoSource
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
      const updatedAuthor = await Author.findByIdAndUpdate(req.params.id)

      const { 
         firstName, 
         lastName, 
         born, 
         photo, 
         photoSource,
         originalLanguage, 
         country } = req.body;

         updatedAuthor.firstName = firstName, 
         updatedAuthor.lastName = lastName, 
         updatedAuthor.originalLanguage = originalLanguage, 
         updatedAuthor.born = born, 
         updatedAuthor.country = country, 
         updatedAuthor.photo = photo, 
         updatedAuthor.photoSource = photoSource

      await updatedAuthor.save()
      res.json(updatedAuthor)
      console.log('Author updated successfully.', updatedAuthor)

   } catch (error) {
      console.log(error)
   }
}

// authors/:id/delete
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