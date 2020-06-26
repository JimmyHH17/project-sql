const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin");

router.route("/admin").post(adminController.admin);

module.exports = router;
