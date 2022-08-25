const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name : String, 
    category : String, 
    prices: {
        type : Number,
        require : true
    }
    
}, { timestamps: true });


module.exports = mongoose.model('OldProduct', productSchema) //oldproducts
