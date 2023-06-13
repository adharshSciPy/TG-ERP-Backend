const express = require("express");
const purchaseitemController = require("../controllers/purchaseitemController");


const router = express.Router();

// post
router.post("/createPurchaseitemCollection", purchaseitemController.createPurchaseitemCollection)
router.post("/purchaseitem/:id", purchaseitemController.purchaseitem);

//get

router.get("/purchasedetailsitem", purchaseitemController.purchaseitemdetails);

//delete

router.delete("/deletePurchaseitem/:id", purchaseitemController.deletePurchaseitem);

//put

router.put("/updatePurchaseitem/:id", purchaseitemController.updatePurchaseitem);

// get by id

router.get("/getPurchaseitem/:id", purchaseitemController.getPurchaseitem);


//count
router.get("/getcount/:id", purchaseitemController.getcount);
module.exports = router;