const Author = require('../models/Author')
const Book = require('../models/Book')
const asyncHandler = require('express-async-handler')


const getAuthors = asyncHandler(async (req, res) => {
    const authors = await Author.find()
     res.json(authors)
   })
 
 const addAuthor = asyncHandler(async (req, res) => {
 
   const { firstName, lastName, originalLanguage, isAlive, writtenBooks } = req.body;
   

     const newAuthorModel = new Author({
        firstName, lastName, originalLanguage, isAlive, 
        writtenBooks
     });
   
     await newAuthorModel.save()
     
     res.json(newAuthorModel)
   })
module.exports = {addAuthor, getAuthors }