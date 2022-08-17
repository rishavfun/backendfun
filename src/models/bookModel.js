const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
         unique: true,
        required: true
    },

    authorName: String, 
    tags: [String],
    
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages: Number,
    stockAvailable: Boolean,

    year : {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('Boook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
