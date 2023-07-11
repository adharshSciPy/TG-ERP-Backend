const express = require("express");
const rfqController = require("../controllers/rfqController");


const router = express.Router();

// post
router.post("/createRfqCollection", rfqController.createRfqCollection)
router.post("/rfq/:id", rfqController.rfq);

//get

router.get("/rfqdetails", rfqController.rfqdetails);

//delete

// router.delete("/deleterfq/:id", rfqController.deleterfq);

router.delete("/deleterfq/:companyID/:salesID", rfqController.deleterfq)

//put

// router.put("/updaterfq/:id", rfqController.updaterfq);

router.put("/updaterfq/:companyID/:salesID", rfqController.updaterfq);

// get by id

router.get("/getrfq/:id", rfqController.getrfq);
router.get("/getrfqById/:id/:rfqID",rfqController.getrfqById)
//count
router.get("/getcount/:id", rfqController.getcount);

module.exports = router;