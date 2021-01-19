var express = require("express");
var router = express.Router();

const userController = require("../../controllers/user");

//router.post("/create",services.verifyToken, userController.createUser);
router.post("/create", userController.createUser);
router.post("/login", userController.login);


module.exports = router;
