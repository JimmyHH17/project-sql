const bcrypt = require("bcryptjs");

const models = require("../models");

const jwt = require("jsonwebtoken");

const { get } = require("../routes/user");

exports.userList = (req, res, next) => {
  models.user
    .findAll()
    .then((user) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
};
//for showing user profile
exports.userDetail = (req, res, next) => {
  models.user.findAll(userId).then((user) => {
    res.send(users);
  });
  bcrypt;
  get
    .userDetail(this.userList)
    .create({
      FirstName: FirstName,
      LastName: LastName,
      userName: userName,
      email: email,
      Password: hashPassword,
    })
    .catch((err) => console.log(err));
};

exports.updateUser = (req, res, next) => {};

exports.register = (req, res, next) => {
  //{"FirstName": "Hazim","LastName": "Hazimin","userName": "Jimmy","email": "Hazim.Hazimin@gmail.com","Password": "123456"}

  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const userName = req.body.userName;
  const email = req.body.email;
  const Password = req.body.Password;
  console.log(req.body);
  bcrypt

  //for hiding the password
    .hash(Password, 12)
    .then((hashPassword) => {
      return models.user.create({
        FirstName: FirstName,
        LastName: LastName,
        userName: userName,
        email: email,
        Password: hashPassword,
      });
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log(err));
};

exports.login = (req, res, next) => {
  //{"UserName":"jimmy", "password":"123456", "email":"Hazim.Hazimin@gmail.com"}
  const userName = req.body.userName;
  const password = req.body.password;
  let user;
  console.log(req.body);
  // bcrypt

  //   return models.user.create({
  //     userName: userName,
  //     Password: hashPassword,
  //   });
  // })
  // //.then((user) => {
  //   res.send(user);
  // })
  // .catch((err) => console.log(err));

  exports.userProfile = (req, res, next) => {};
  //update profile for user

  exports.blockUser = (req, res, next) => {};
  //{"userId"=1}
  //search the user by Id
  // Change the isBlock status to true
  models.user
    .findOne({ where: { userName: userName } })
    .then((user) => {
      //block user or not code
      if (user.isBlock) {
        res.statusCode = 401;
        res.send({ massage: "you've been block" });
      }
      // console.log(user);
      user = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isMatch) => {
      if (isMatch) {
        const userData = {
          userId: user,
        };
        const token = jwt.sign(userData, "secret");
        res.send({ token: token });
      } else {
        console.log("not match");
      }
    });
  
};
