const express = require("express");

//connect to router folder
const router = express.Router();

//connect to User controller folder
const userController = require("../controller/user");

//connet to middlewares folder
const userMiddlewares = require("../middlewares/user");

//route for registering user
router
  .route("/user")
  .get(userMiddlewares.authenticateUser, userController.userList)
  .post(userController.register);

  //route for user detail
  router.route("/users-details").get( userMiddleware.authUser ,userController.usersDetail);


//router.post("/register",(req,res,next)=>{});

router.route("/login").post(userController.login);

router
  .route("/user/:userId")
  .get((req, res, next) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {});

router.get("/my-profile", (req, res, next) => {});

module.exports = router;
