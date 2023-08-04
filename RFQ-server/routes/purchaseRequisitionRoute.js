const express = require("express");
const RequisitionController = require("../controllers/purchaseRequisitionController");


const router = express.Router();

// post
router.post("/createRequisitionCollection", RequisitionController.createpurchaseRequisitionCollection)
router.post("/purchaseRequisition/:id", RequisitionController.purchaseRequisition);

//get

router.get("/purchaseRequisitiondetails", RequisitionController.purchaseRequisitiondetails);

//delete

// router.delete("/deleterfq/:id", rfqController.deleterfq);

router.delete("/deletepurchaseRequisition/:companyID/:salesID", RequisitionController.deletepurchaseRequisition)

//put

// router.put("/updaterfq/:id", rfqController.updaterfq);

router.put("/updatepurchaseRequisition/:companyID/:salesID", RequisitionController.updatepurchaseRequisition);

// get by id

router.get("/getpurchaseRequisition/:id", RequisitionController.getpurchaseRequisition);
router.get("/getpurchaseRequisitionById/:id/:RequisitionID",RequisitionController.getpurchaseRequisitionById)
//count
router.get("/getcount/:id", RequisitionController.getcount);

module.exports = router;