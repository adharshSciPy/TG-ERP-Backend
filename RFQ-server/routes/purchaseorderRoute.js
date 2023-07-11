const express = require("express");
const purchaseorderController = require("../controllers/purchaseorderController");


const router = express.Router();

// post
router.post("/createPurchaseorderCollection", purchaseorderController.createPurchaseorderCollection)
router.post("/purchaseorder/:id" ,purchaseorderController.purchaseorder);

//get

router.get("/purchaseorderdetails", purchaseorderController.purchaseorderdetails);

//delete

// router.delete("/deletePurchaseorder/:id", purchaseorderController.deletePurchaseorder);

router.delete("/deletePurchaseorder/:companyID/:salesID", purchaseorderController.deletePurchaseorder)

//put

// router.put("/updatePurchaseorder/:id", purchaseorderController.updatePurchaseorder);

router.put("/updatePurchaseorder/:companyID/:salesID", purchaseorderController.updatePurchaseorder);

// get by id

router.get("/getPurchaseorder/:id", purchaseorderController.getPurchaseorder);
router.get("/getPurchaseorderById/:id/:PurchaseorderID",purchaseorderController.getPurchaseorderById)
//count
router.get("/getcount/:id", purchaseorderController.getcount);

module.exports = router;