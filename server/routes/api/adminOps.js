var express = require("express");
var router = express.Router();

const adminController = require("../../AdminOps/Controllers/adminController");

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.get("/product/metadata", adminController.getProductMetaData);
router.post("/product/add", adminController.createProduct);
router.get("/product", adminController.getAllProducts);
router.post("/product/byPincode", adminController.getByPincode);
router.post("/product/update", adminController.updateProduct);

//category

router.post("/category/add", adminController.createCategory);
router.post("/subcategory/add", adminController.createSubCategory);

router.post(
  "/subcategory/getAllSubCategory",
  adminController.getAllSubCategory
);
router.post(
  "/subcategory/getAllSubCategorybyCategory",
  adminController.getAllSubCategorybyCategory
);
router.post("/category/getAllCategory", adminController.getAllCategory);

router.post(
  "/subcategory/updateSubCategory",
  adminController.updateSubCategory
);
router.post("/category/updateCategory", adminController.updateCategory);

router.post("/category/deleteCategory", adminController.deleteCategory);
router.post(
  "/subcategory/deleteSubCategory",
  adminController.deleteSubCategory
);

// done today
router.post("/product/filterProductBy", adminController.filterProductby);

module.exports = router;
