const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel.js")


const createBook= async function (req, res) {
    let book = req.body
    let author_id = book.author_id
    let publisher_id = book.publisher_id

    let validAuthor = await authorModel.findById(author_id)              //{_id:{$eq :author_id}}
    if(validAuthor==null) {return res.send({msg:"give valid author"})}
    if(!author_id){return  res.send({msg:"author_id is compulsory"})}

    if(!publisher_id){return  res.send({msg: "publisher_id is compulsory"})}
    let validPublisher = await publisherModel.findById(publisher_id) 
    if(validPublisher==null) {return res.send({msg:"give valid pubishar"})}


    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().select({ id: 1})
    res.send(books)
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(["publisher_id","author_id"] )
    res.send({data: specificBook})

}
const updatebook = async function (req, res) {
    // let specificBook = await bookModel.find().populate(["publisher_id","author_id"] )
    // let updateH_C = specificBook.findById({publisher_id}) 
   
        let updateH_C = await bookModel.find() 
        res.send({updateH_C})
    


}


module.exports.updatebook = updatebook
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 