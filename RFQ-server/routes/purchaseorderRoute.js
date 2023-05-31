const express = require("express");
const purchaseorderController = require("../controllers/purchaseorderController");


const router = express.Router();

// post
router.post("/createPurchaseorderCollection", purchaseorderController.createPurchaseorderCollection)
router.post("/purchaseorder/:id" ,purchaseorderController.purchaseorder);

//get

router.get("/purchaseorderdetails", purchaseorderController.purchaseorderdetails);

//delete

router.delete("/deletePurchaseorder/:id", purchaseorderController.deletePurchaseorder);

//put

router.put("/updatePurchaseorder/:id", purchaseorderController.updatePurchaseorder);

// get by id

router.get("/getPurchaseorder/:id", purchaseorderController.getPurchaseorder);

module.exports = router;