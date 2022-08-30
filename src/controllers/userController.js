const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.status(201).send({ msg: savedData });
  }
  catch (error) {
    console.log(error.message);
    xyz.status(404).send({ msg: error.message })
  }

};

const loginUser = async function (req, res) {

  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(403).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    // res.setHeader("x-auth-token", token); 
    res.status(200).send({ status: true, token: token });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message })
  }
};

//------------------------------------------------------------------
const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });

    res.status(403).send({ status: true, data: userDetails });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message })
  }
};
// ----------------------------------------------------------------------------------------

const updateUser = async function (req, res) {
try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(403).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: updatedUser });
} catch (error) {
  console.log(error.message);
  res.status(500).send({ msg: error.message })
}
};



const deleteUser = async function (req, res) {


  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  // //If no token is present in the request header return error. This means the user is not logged in.
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);
  // // decoding the token 
  // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.status(200).send({ status: userData, data: updatedUser });

} catch (error) {
  console.log(error.message);
  res.status(500).send({ msg: error.message })
}
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
// module.exports.authMiddle = authMiddle;
