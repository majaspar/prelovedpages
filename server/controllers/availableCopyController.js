const Book = require("../models/Book");
const Author = require("../models/Author");
const AvailableCopy = require("../models/AvailableCopy");

const asyncHandler = require("express-async-handler");
// /api/authors/
// const allAuthors = asyncHandler(async (req, res) => {
//     const authors = await Author.find({}).sort({ createdAt: -1 })
//     res.json(authors)
//  })

// /api/copies/
const getCopies = asyncHandler(async (req, res) => {
  const allCopies = await AvailableCopy.find({}).sort({ createdAt: -1 });
  res.json(allCopies);
});

// /api/copies/:id/
const oneCopy = asyncHandler(async (req, res) => {
  const copy = await AvailableCopy.findById(req.params.id)
    .populate("bookModel")
    .populate("author")
    .exec();
  res.json(copy);
});

// /api/copies/:id/addcopy/
const addCopy = async (req, res) => {
  try {
    const {
      bookModel,
      author,
      photo,
      thisCopyPublishedYear,
      publishingHouse,
      condition,
      conditionDescription,
      isAvailable,
      price,
      Isbn,
    } = req.body;

    const theBookModel = await Book.findById(req.params.id);
    const theAuthor = await Author.findById(author);

    const newAvailableCopy = new AvailableCopy({
      bookModel,
      author,
      photo,
      publishingHouse,
      thisCopyPublishedYear,
      condition,
      conditionDescription,
      isAvailable,
      price,
      Isbn,
    });

    await newAvailableCopy.save();
    console.log("Available Copy added successfully!");

    theAuthor.availableCopies.push(newAvailableCopy);
    await theAuthor.save();

    console.log("The Author saved successfully!");
    theBookModel.availableCopies.push(newAvailableCopy);
    theBookModel.isAvailable = true;

    await theBookModel.save();
    console.log("The Book Model saved successfully!");
  } catch (error) {
    console.log(error);
  }
};

//  /api/copies/:id/update
const updateCopy = async (req, res) => {
  try {
    const copy = await AvailableCopy.findByIdAndUpdate(req.params.id);

    const {
      bookModel,
      author,
      photo,
      publishingHouse,
      thisCopyPublishedYear,
      condition,
      conditionDescription,
      isAvailable,
      price,
      Isbn,
    } = req.body;

    copy.bookModel = bookModel;
    copy.author = author;
    copy.photo = photo;
    copy.publishingHouse = publishingHouse;
    copy.thisCopyPublishedYear = thisCopyPublishedYear;
    copy.condition = condition;
    copy.conditionDescription = conditionDescription;
    copy.isAvailable = isAvailable;
    copy.price = price;
    copy.Isbn = Isbn;

    await copy.save();
  } catch (error) {
    console.log(error);
  }
};

// /api/copies/:id/delete
const deleteCopy = async (req, res) => {
  try {
    const copy = await AvailableCopy.findByIdAndDelete(req.params.id);
    console.log("Copy deleted successfully.");
    res.status(201);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addCopy, updateCopy, oneCopy, getCopies, deleteCopy };

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
