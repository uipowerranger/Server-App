const adminService = require("../Services/adminService");
const responseWrapper = require("../../utils/responseWrapper");
const utils = require("../../utils/util");

//File Upload
exports.fileUpload = async (req, res) => {
  const data = req.body.data;
  let url = await utils.saveImage(data);
  res.send({ url });
};

//Verify OTP
exports.verifyOtp = async (req, res) => {
  const [err, data, message] = await adminService.verifyOtp(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While Register"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "OTP Verified");
};

//Register
exports.register = async (req, res) => {
  const [err, data, message] = await adminService.register(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While Register"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully added admin");
};

//getLoginUser
exports.getLoginUser = async (req, res) => {
  const [err, data, message] = await adminService.getLoginUser(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While Login"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully got user");
};

exports.updateAdmin = async (req, res) => {
  const [err, data, message] = await adminService.updateAdmin(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While Login"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully Updated");
};

//Login
exports.login = async (req, res) => {
  const [err, data, message] = await adminService.login(req);
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

exports.createCategory = async (req, res) => {
  const [err, data, message] = await adminService.createCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While creating category"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully created category"
  );
};

exports.getAllCategory = async (req, res) => {
  const [err, data, message] = await adminService.getAllCategory();
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting category"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully got category");
};

exports.getAllSubCategory = async (req, res) => {
  const [err, data, message] = await adminService.getAllSubCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting subcategory"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully got subcategory"
  );
};

exports.getAllSubCategorybyCategory = async (req, res) => {
  const [err, data, message] = await adminService.getAllSubCategorybyCategory(
    req
  );
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting subcategory"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully got subcategory"
  );
};

exports.createSubCategory = async (req, res) => {
  const [err, data, message] = await adminService.createSubCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While creating sub-category"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully created sub-category"
  );
};

exports.getAllSubCategory = async (req, res) => {
  const [err, data, message] = await adminService.getAllSubCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting subcategory"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully got subcategory"
  );
};

exports.updateCategory = async (req, res) => {
  const [err, data, message] = await adminService.updateCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While updated category"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully updated category"
  );
};

exports.updateSubCategory = async (req, res) => {
  const [err, data, message] = await adminService.updateSubCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While updated subcategory"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully updated subcategory"
  );
};

exports.deleteCategory = async (req, res) => {
  const [err, data, message] = await adminService.deleteCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While deleting category"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully deleted category"
  );
};

exports.deleteSubCategory = async (req, res) => {
  const [err, data, message] = await adminService.deleteSubCategory(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While deleteing subcategory"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully deleted subcategory"
  );
};

exports.getProductMetaData = async (req, res) => {
  const [err, data, message] = await adminService.getMetaDataCreateProduct(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting data"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully got meta data");
};

exports.createProduct = async (req, res) => {
  const [err, data, message] = await adminService.createProduct(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While creating product"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully created product"
  );
};

exports.getAllProducts = async (req, res) => {
  const [err, data, message] = await adminService.getAllProducts(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting product"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully got product");
};

exports.getByPincode = async (req, res) => {
  const [err, data, message] = await adminService.getProductsByPincode(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting product"
    );
    return;
  }
  responseWrapper.successWrapper(res, 200, data, "Successfully got product");
};

exports.filterProductby = async (req, res) => {
  const [err, data, message] = await adminService.filterProductby(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While filtering products"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully filtered product"
  );
};
exports.updateProduct = async (req, res) => {
  const [err, data, message] = await adminService.updateProduct(req);
  if (err) {
    responseWrapper.errorWrapper(
      res,
      -9999,
      "Something Went Wrong While getting product"
    );
    return;
  }
  responseWrapper.successWrapper(
    res,
    200,
    data,
    "Successfully updated product"
  );
};
