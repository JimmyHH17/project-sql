const jwt = require("jsonwebtoken");

const models = require("../models");

exports.authenticateUser = (req, res, next) => {
  console.log(req.hearders);
  const tokenHeader = req.headers.authorization;
  if (tokenheader) {
    let token = tokenHeader.splat(" ")[1];
    consol.log(token);
    const verify = jwt
      .verify(token, "secret", (eer, result) => {
        models.user.findByPk(result.userId);
      })
      .then((user) => {
        req = user;
        next();
      });
  } else {
    res.sendstatus(401);
  }
  // req.user = result from query;
  // next();
};

//exports
