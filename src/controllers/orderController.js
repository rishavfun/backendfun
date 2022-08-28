// const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {

    let isFreeAppUser  = req.headers["isfreeappuser"]
    console.log(isFreeAppUser);
    if (!req.headers.isfreeappuser) {
        res.send({ msg: "add FreeAppUser in header" })
    }

    let data = req.body
    let userId = data.userId
    if (!userId) return res.send({ msg: 'userId is mandatory in the request' })
    let validUser = await userModel.findById(userId)
    if (validUser == null) { return res.send({ msg: "give valid userId" }) }

    let productId = data.productId
    if (!productId) return res.send({ msg: 'productId is mandatory in the request' })
    let validproduct = await productModel.findById(productId)
    if (validproduct == null) { return res.send({ msg: "give valid productId" }) }

   

        if(req.headers["isfreeappuser"]==true){
         req.body.isFreeAppUser = true;
         req.body.amount = 0
         myOrder = await orderModel.create(req.body)
         res.send({msg:myOrder})
        }
        else if(req.headers["isfreeappuser"]==false){
         productId = req.body.productId
         userId= req.body.userId
         let productPrice = await productModel.findById(productId).select({prices:1, _id:0})
         let amount = await userModel.findById(userId).select({balance:1, _id:0})
         if(productPrice<amount){
             req.body.amount = amount - productPrice;
             req.body.isFreeAppUser = false
            let  myOrder = await orderModel.create(req.body)
             res.send({msg:myOrder})
     
         }
         else{
             res.send("You dont have sufficient Balance")
         }
         
        }

     }
      
     

module.exports.createOrder = createOrder
