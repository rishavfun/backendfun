const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")
const userModel= require("../models/userModel")

// userId
const createOrder= async function (req, res) {
    let data = req.body
    let userId = data.userId
    if(!userId) return res.send({msg: 'userId is mandatory in the request'})
    let validUser = await userModel.findById(userId)
    if(validUser==null) {return res.send({msg:"give valid userId"})}
    
    let productId = data.productId
    if(!productId) return res.send({msg: 'productId is mandatory in the request'})
    let validproduct = await productModel.findById(productId)              
    if(validproduct==null) {return res.send({msg:"give valid productId"})}

    //header check
    // let head = req.headers["isFreeAppUser"]
    // console.log(head);
    // if(!head){
    //     head = req.headers["isFreeappUser"]
    // }
     // if(!head){
    //     res.send({msg: "headr is not present"})
    // }

    req.headers.isFreeAppUser = true
    if(!req.headers.isFreeAppUser){
        res.send({ msg : "add isFreeAppUser in header"})
    }
   


    // let savedData= await orderModel.create(data)
    // res.send({data: savedData})
    res.send({msg: "done"})
}

module.exports.createOrder= createOrder
