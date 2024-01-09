const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvailableCopySchema = new Schema(
  {
    bookModel: { type: Schema.Types.ObjectId, ref: "Book" },
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    photo: [{ type: String, required: false }],
    thisCopyPublishedYear: { type: Number, required: false },
    publishingHouse: { type: String, required: false },
    condition: {
      type: String,
      enum: ["New", "Like New", "Very Good", "Good", "Acceptable"],
      required: false,
    },
    conditionDescription: { type: String, required: false },
    isAvailable: { type: Boolean },
    price: { type: Number, required: false },
    Isbn: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AvailableCopy", AvailableCopySchema);
