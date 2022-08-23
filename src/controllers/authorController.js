const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await authorModel.find({_id:"62ff6daeb409379bf7bb006a"}).select({authorName : 1})
    res.send(authors)
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData