const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
  //check the token in request header
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  req.decodedToken=decodedToken
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  next()
}

// --------------------------------------------------------------
const authorise = function (req, res, next) {
  let userId = req.params.userId;
  let userLoggedIn = req.decodedToken.userId
  if (userId != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

  next()
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise