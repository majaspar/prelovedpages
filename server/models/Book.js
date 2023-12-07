const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    //author: { type: Schema.Types.ObjectId, ref: 'Author' },
    cover: { type: String, required: false },
    publishedYear: { type: Number, required: false },
    synopsis: { type: String, required: false },
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