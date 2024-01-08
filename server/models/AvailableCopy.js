const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvailableCopySchema = new Schema ({
    bookModel: { type: Schema.Types.ObjectId, ref: 'Book' },
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    photo: [{ type: String }],
    thisCopyPublishedYear:  { type: Number },
    publishingHouse:  { type: String },
    condition: { 
        type: String,
        enum: ['New', 'Like New', 'Very good', 'Good', 'Acceptable']
    },
    conditionDescriprion: { type: String },
    isAvailable: { type: Boolean },
    price: { type: Number },
    ISBN: { type: Number },
}, {
    timestamps: true,
})


module.exports = mongoose.model('AvailableCopy', AvailableCopySchema);