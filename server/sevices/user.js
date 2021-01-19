const userSchema = require("../models/user");
var utilsinfo = require("../utils/util");
const accountSid = "ACe3d060b1cb0941416df92cf5eb7a3678";
const authToken = "62f14ae03894cd82cde5cecf13f67f93";
const fromUser = "+16179343050";
const client = require("twilio")(accountSid, authToken);
const userValidations = require("../validations/user.validations");

//User Create
exports.createUser = async (req) => {
  // console.log("create");
  return [false, []];
};

//User Login
exports.login = async (req) => {
  return [false, []];
};
