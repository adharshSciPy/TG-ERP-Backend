const express = require("express");
const vendorController = require("../controllers/vendorController");


const router = express.Router();

// post
router.post("/createVendorCollection", vendorController.createVendorCollection);
router.post("/vendor/:id", vendorController.vendor);

//get

router.get("/vendordetails", vendorController.vendordetails);

//delete

router.delete("/deletevendor/:id", vendorController.deletevendor);

//put

router.put("/updatevendor/:id", vendorController.updatevendor);

// get by id

router.get("/getvendor/:id", vendorController.getvendor);

//count
router.get("/getcount/:id", vendorController.getcount);

module.exports = router;