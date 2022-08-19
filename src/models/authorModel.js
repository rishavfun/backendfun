const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    author_id:{
        type :  Number,
        required: true
    },
    author_name : "string",
    age :Number,
    address : "string"
}, { timestamps: true });

module.exports = mongoose.model('Author', userSchema) //author



// String, Number
// Boolean, Object/json, array