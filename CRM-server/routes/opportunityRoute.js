const express = require("express");
const opportunityController = require("../controllers/opportunityController");
const router = express.Router();

// post
router.post("/createOpportunityCollection", opportunityController.createOpportunityCollection)
router.post("/createOpportunity/:id", opportunityController.createOpportunity);

//get

router.get("/opportunityDetails", opportunityController.opportunityDetails);

//delete

router.delete("/deleteOpportunity/:companyID/:opportunityID", opportunityController.deleteOpportunity);


//put

router.put("/updateOpportunity/:id", opportunityController.updateOpportunity);

// get by id

router.get("/getOpportunity/:id", opportunityController.getOpportunity);
router.get("/getOpportunityById/:id/:OpportunityID", opportunityController.getOpportunityById);

//count
router.get("/getcount/:id", opportunityController.getcount);
router.put("/followup/:companyID/:opportunityID", opportunityController.createFollowUp)

module.exports = router;