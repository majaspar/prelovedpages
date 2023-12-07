const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvailableCopySchema = new Schema ({
    parentBook: { type: Schema.Types.ObjectId, ref: 'Book' },
    photo: { type: String },
    thisCopyDescription: { type: String }
}, {
    timestamps: true,
})


module.exports = mongoose.model('AvailableCopy', AvailableCopySchema);