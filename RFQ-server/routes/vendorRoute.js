const express = require("express");
const vendorController = require("../controllers/vendorController");


const router = express.Router();

// post
router.post("/createVendorCollection", vendorController.createVendorCollection);
router.post("/vendor/:id", vendorController.vendor);

//get

router.get("/vendordetails", vendorController.vendordetails);

//delete

// router.delete("/deletevendor/:id", vendorController.deletevendor);

router.delete("/deletevendor/:companyID/:salesID", vendorController.deletevendor)

//put

// router.put("/updatevendor/:id", vendorController.updatevendor);

router.put("/updatevendor/:companyID/:salesID", vendorController.updatevendor);

// get by id

router.get("/getvendor/:id", vendorController.getvendor);
router.get("/getvendorById/:id/:VendorID",vendorController.getvendorById)
//count
router.get("/getcount/:id", vendorController.getcount);

module.exports = router;