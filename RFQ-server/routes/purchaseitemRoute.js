const express = require("express");
const purchaseitemController = require("../controllers/purchaseitemController");


const router = express.Router();

// post

router.post("/purchaseitem", purchaseitemController.purchaseitem);

//get

router.get("/purchasedetailsitem", purchaseitemController.purchaseitemdetails);

//delete

router.delete("/deletePurchaseitem/:id", purchaseitemController.deletePurchaseitem);

//put

router.put("/updatePurchaseitem/:id", purchaseitemController.updatePurchaseitem);

// get by id

router.get("/getPurchaseitem/:id", purchaseitemController.getPurchaseitem);

module.exports = router;