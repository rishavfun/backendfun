const UserModel = require("../models/userModel")




// const basicCode = async function (req, res, next) {
//     let tokenDataInHeaders = req.headers.token
//     console.log(tokenDataInHeaders)

//     // console.log( "HEADER DATA ABOVE")
//     // console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)" })
//     // next()
// }

// const createUser = async function (req, res) {

//     let data = req.body
//     let tokenDataInHeaders = req.headers.token
//     //Get all headers from request
//     console.log("Request headers before modificatiom", req.headers)

//     //Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)

//     //Set a header in request // key: value is created
//     // req.headers['month']='June' //
//     req.headers.month = "aug"

//     //Set an attribute in request object
//     req.anything = "everything"   //what this line does?


//     console.log("Request headers after modificatiom", req.headers)

//     //Set a header in response
//     res.header('year', '2022')  //what this line does? =response me header is created

//     // console.log(data["add-pincode"]);
//     data["age"] = 72




//     res.send({ msg: tokenDataInHeaders })
// }

// const getUsersData = async function (req, res) {
//     let allUsers = await UserModel.find()
//     res.send({ msg: allUsers })
// }

 const makeUser= async function(req,res){
    // let FreeApp = req.headers["isFreeAppUser"]
    // console.log(req.headers.isFreeAppUsera);
    // console.log(req.headers);
    req.headers.isFreeAppUsera = "efgh"
    if(!req.headers.isFreeAppUsera){
        res.send({ msg : "add isFreeAppUser in header"})
    }
else {
    let data = req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
}
 




module.exports.makeUser = makeUser
// module.exports.createUser = createUser
// module.exports.getUsersData = getUsersData
// module.exports.basicCode = basicCode