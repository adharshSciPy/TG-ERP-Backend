const express = require("express");
const CategoryController = require("../controllers/CategoryController");


const router = express.Router();

// post
router.post("/createcategoryCollection", CategoryController.createcategoryCollection)
router.post("/category/:id", CategoryController.category);

//get

router.get("/categorydetails", CategoryController.categorydetails);

//delete

// router.delete("/deletecategory/:id", CategoryController.deletecategory);

router.delete("/deletecategory/:companyID/:categoryID", CategoryController.deleteCategory)

//put

// router.put("/updatecategory/:id", CategoryController.updatecategory);

router.put("/updatecategory/:companyID/:categoryID", CategoryController.updateCategory);

// get by id

router.get("/getcategory/:id", CategoryController.getcategory);
router.get("/getcategoryById/:id/:categoryID",CategoryController.getcategoryById)
//count
router.get("/getcount/:id", CategoryController.getcount);

module.exports = router;