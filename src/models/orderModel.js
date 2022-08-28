const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const authorSchema = new mongoose.Schema( {
    userId:{
        type : ObjectId,
        ref : "OldUser"
    },
    productId:{
        type : ObjectId,
        ref : "OldProduct"
    },
    amount : Number,
    isFreeAppUser : Boolean,
    date: String,

}, { timestamps: true });

module.exports = mongoose.model('OldOrder', authorSchema)
