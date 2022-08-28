const UserModel = require("../models/userModel")




 const makeUser= async function(req,res){
    // let FreeApp = req.headers["isfreeappuser"]
    // console.log(FreeApp);
    // console.log(req.headers);
    // if(!req.headers.isfreeappuser){
    //     res.send({ msg : "add FreeAppUser in header"})
    // }
// else {
  
// }
let data = req.body
let savedData= await UserModel.create(data)
res.send({msg: savedData})
}
 




module.exports.makeUser = makeUser
// module.exports.createUser = createUser
// module.exports.getUsersData = getUsersData
// module.exports.basicCode = basicCode