const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    }, 
    publisher_id: {
        type: ObjectId,
        ref:"NewPublisher"
    },
    price: Number,
    ratings: Number,

    HardCover:{
        type : Boolean,
        default: false  }
}, { timestamps: true });


module.exports = mongoose.model('NewLibraryBook', bookSchema)
