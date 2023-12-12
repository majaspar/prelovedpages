const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvailableCopySchema = new Schema ({
    bookModel: { type: Schema.Types.ObjectId, ref: 'Book' },
    photo: { type: String },
    thisCopyDescription: { type: String },
    isAvailable: { type: Boolean },
    price: { type: Number.toFixed(2) },
    ISBN: { type: Number },
}, {
    timestamps: true,
})


module.exports = mongoose.model('AvailableCopy', AvailableCopySchema);