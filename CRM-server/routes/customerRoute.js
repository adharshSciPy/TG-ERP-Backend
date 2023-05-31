const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

// post
router.post("/addCustomerCollection", customerController.createCustomerCollection);
router.post("/customer/:id", customerController.createCustomer);
//get
 
router.get("/customerdetails", customerController.customerDetails);


//delete

router.delete("/deleteCustomer/:id", customerController.deleteCustomer);

//put

router.put("/updateCustomer/:id", customerController.updateCustomer);


// get by id

router.get("/getCustomer/:id", customerController.getCustomer);


module.exports = router;