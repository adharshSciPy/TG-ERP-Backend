const express = require("express");
const customerController = require("../controllers/customerController");
const multer = require('multer');


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// post
router.post("/addCustomerCollection", customerController.createCustomerCollection);
router.post("/customer/:id", upload.single('image'), customerController.createCustomer);
//get All
router.get("/customerdetails", customerController.customerDetails);
//delete
router.delete("/deleteCustomer/:companyID/:customerID", customerController.deleteCustomer);
//put
router.put("/updateCustomer/:companyID/:customerID", customerController.updateCustomer);
// get customers
router.get("/getCustomer/:id", customerController.getCustomer);
router.get('/getCoustomerbyid/:id/:customerId',customerController.getCustomerbyId)
//count
router.get("/getcount/:id",customerController.getcount);
router.get("/image/:folder/:key",customerController.getimage);

module.exports = router;