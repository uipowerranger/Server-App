const userService = require("../sevices/user");
const responseWrapper = require("../utils/responseWrapper");

//creating new user
exports.createUser = async (req, res) => {
  const [err, data, message] = await userService.createUser(req);
  console.log(err);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While Creating User"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully Created User");
};

//Login
exports.login = async (req, res) => {
  const [err, data, message] = await userService.login(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While Login"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully Logged In");
};
