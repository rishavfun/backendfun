const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let authorId = data.author_id
    if(!authorId){ return  res.send({status: false , msg: "author id is not present"})}
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getAuthersData= async function (req, res) {
    let allUsers= await AuthorModel.find()
    res.send({msg: allUsers})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthersData= getAuthersData