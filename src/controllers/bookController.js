const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let authorId = data.author_id
    if (!authorId) { return res.send({ status: false, msg: "author id is not present" }) }
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const bookByCB = async function (req, res) {
    let allAuthors = await AuthorModel.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    let allBooks = await BookModel.find(allAuthors)
    res.send({ msg: allBooks })
}

const question3 = async function (req, res) {
    let allBooks = await BookModel.findOne({ name: "Two states" }).select({ author_id: 1, _id: 0 })
    let allAuthors = await AuthorModel.findOne(allBooks).select({ author_name: 1, _id: 0 })
    let update = await BookModel.findOneAndUpdate(
        { name: "Two states" },
        { price: 100 },
        { new: true}

    ).select({ name:1,price:1})
    res.send({ msg: allAuthors,update })
}

const question4 = async function (req, res){
let book50 =await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
let author = []
for(i=0;i<book50.length; i++){
    let a= book50[i]
    let allAuthors = await AuthorModel.findOne(a).select({  author_name :1})  
author.push(allAuthors)
}
res.send({ msg: author })

}


// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})

// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
// let allBooks= await BookModel.updateMany( 
//     { author: "EVERY MOTHER IS A CEO"} , //condition
//     { $set: data } //update in data
//  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )

//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "ABC"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook = createBook
module.exports.bookByCB = bookByCB
module.exports.question3 = question3
module.exports.question4 = question4
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
