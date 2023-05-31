const express = require("express");
const purchaseController = require("../controllers/purchaseController");


const router = express.Router();

// post
router.post("/createPurchaseCollection", purchaseController.createPurchaseCollection)
router.post("/purchase/:id", purchaseController.purchase);

//get

router.get("/purchasedetails", purchaseController.purchasedetails);

//delete

router.delete("/deletePurchase/:id", purchaseController.deletePurchase);

//put

router.put("/updatePurchase/:id", purchaseController.updatePurchase);

// get by id

router.get("/getPurchase/:id", purchaseController.getPurchase);

module.exports = router;