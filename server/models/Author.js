const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    originalLanguage: { type: String, required: false },
    country: { type: String, required: false },
    isAlive: { type: Boolean, default: true },
    writtenBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    //booksAvailable: [{ type: Schema.Types.ObjectId, ref: 'AvailableCopy' }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Author', AuthorSchema)