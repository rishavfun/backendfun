const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
  try {
      //check the token in request header
  // let token = req.headers["x-Auth-token"];
  let token = req.headers["x-auth-token"];
  if (!token) return res.status(403).send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  req.decodedToken=decodedToken
  if (!decodedToken)
    return res.status(403).send({ status: false, msg: "token is invalid" });
  next()
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send({msg:error.message})
  }

}

// --------------------------------------------------------------
const authorise = function (req, res, next) {
  try {
    let userId = req.params.userId;
    let userLoggedIn = req.decodedToken.userId
    if (userId != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  
    next()
  } catch (error) {
    console.log(error.message);
    res.status(500).send({msg:error.message})
  }
 
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise