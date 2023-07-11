const express = require("express");
const purchaseController = require("../controllers/purchaseController");


const router = express.Router();

// post
router.post("/createPurchaseCollection", purchaseController.createPurchaseCollection)
router.post("/purchase/:id", purchaseController.purchase);

//get

router.get("/purchasedetails", purchaseController.purchasedetails);

//delete

// router.delete("/deletePurchase/:id", purchaseController.deletePurchase);

router.delete("/deletePurchase/:companyID/:salesID", purchaseController.deletePurchase)

//put

// router.put("/updatePurchase/:id", purchaseController.updatePurchase);

router.put("/updatePurchase/:companyID/:salesID", purchaseController.updatePurchase);

// get by id

router.get("/getPurchaseById/:id/:PurchaseID",purchaseController.getPurchaseById)

//count
router.get("/getcount/:id", purchaseController.getcount);


module.exports = router;