const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    originalLanguage: { type: String, required: false },
    born: { type: Number, required: false },
    country: { type: String, required: false },
    photo: { type: String, required: false },
    photoSource: { type: String, required: false },
    writtenBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    availableCopies: [{ type: Schema.Types.ObjectId, ref: 'AvailableCopy' }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Author', AuthorSchema)