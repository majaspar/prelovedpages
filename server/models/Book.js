const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    //author: { type: Schema.Types.ObjectId, ref: 'Author' },
    publishedYear: { type: Number},
    ISBN: { type: Number },
    cover: { type: String },
    isPartOfSeries: {type: Boolean, default: false },
    series: {type: String },
    volume: { type: Number },
    synopsis: { type: String },
    isAvailable: { type: Boolean },
    genre: { type: String,
        enum: ['Romance', 'Fiction',
            'Thriller', 'Fantasy',
            'Science Fiction',
            'Horror',
            'Mystery',
            'Young Adult',
            'Historical Fiction']
    },
    availableCopies: [{ type: Schema.Types.ObjectId, ref: 'AvailableCopy' }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);