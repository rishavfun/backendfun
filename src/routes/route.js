const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

const BookModel = require("../modelBook/bookModel")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
} )

router.get("/getBookData",async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
} )


module.exports = router;