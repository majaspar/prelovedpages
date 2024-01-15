const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    title: { type: String, required: true },
    publishedYear: { type: Number},
    synopsis: { type: String },
    cover: { type: String },
    isFeatured: {type: Boolean, default: false },
    isAvailable: { type: Boolean, default: false },
    isPartOfSeries: {type: Boolean, default: false },
    series: {type: String },
    volume: { type: Number },
    genre: [{ type: String,
        enum: ['Romance', 'Fiction',
            'Thriller', 'Fantasy',
            'Science Fiction',
            'Horror', 'Foreign', 'Middle Grade',
            'Mystery', 'Contemporary',
            'Young Adult', 'Childrens',
            'Historical Fiction', 'Non-Fiction']
    }],
    availableCopies: [{ type: Schema.Types.ObjectId, ref: 'AvailableCopy' }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);