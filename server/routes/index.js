var express = require("express");
var router = express.Router();

const user = require("./api/user");
router.use("/user", user);

const admin = require("./api/adminOps");
router.use("/admin", admin);

module.exports = router;
