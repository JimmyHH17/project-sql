const bcrypt = require("bcryptjs");

const models = require("../models");

const jwt = require("jsonwebtoken");

exports.admin = (req, res, next) => {
  //{"UserName":"jimmy", "password":"123456"}
  const UserName = req.body.UserName;
  const Email = req.body.Email;
  const Password = req.body.Password;
  let user;
  console.log(req.body);
  bcrypt

    .hash(Password, 12)
    .then((hashPassword) => {
      return models.admin.create({
        UserName: UserName,
        Email: Email,
        Password: hashPassword,
      });
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log(err));
};
