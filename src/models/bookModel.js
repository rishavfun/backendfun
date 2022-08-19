const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    name:"string",
    author_id: {
        type :  Number,
        required: true
    },
    price: Number,
    ratings: Number,

}, { timestamps: true })




module.exports = mongoose.model('Bookas', bookSchema) //users
