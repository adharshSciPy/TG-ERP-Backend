const express = require("express");
const rfqController = require("../controllers/rfqController");


const router = express.Router();

// post

router.post("/rfq", rfqController.rfq);

//get

router.get("/rfqdetails", rfqController.rfqdetails);

//delete

router.delete("/deleterfq/:id", rfqController.deleterfq);

//put

router.put("/updaterfq/:id", rfqController.updaterfq);

// get by id

router.get("/getrfq/:id", rfqController.getrfq);

module.exports = router;