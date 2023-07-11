const express = require("express");
const prjmanagerController = require("../controllers/prjmanagerController");

const router = express.Router();

    // Post
    router.post("/createPrjmanagerCollection", prjmanagerController.createPrjmanagerCollection)
    router.post("/addPrjmanagerDetails/:id", prjmanagerController.addPrjmanagerDetails)

    // Get

    router.get("/getPrjmanagerDetails", prjmanagerController.getPrjmanagerDetails)
    
    // Get by id

    router.get("/getidPrjmanagerDetails/:id", prjmanagerController.getidPrjmanagerDetails)
    router.get("/getidPrjmanagerDetailsById/:id/:PrjmanagerID",prjmanagerController.getPrjmanagerDetailsById)
    
    // Delete

    // router.delete("/deletePrjmanagerDetails/:id", prjmanagerController.deletePrjmanagerDetails)

    router.delete("/deletePrjmanagerDetails/:companyID/:prjmanagerID", prjmanagerController.deletePrjmanagerDetails)

    // Put

    // router.put("/editPrjmanagerDetails/:id", prjmanagerController.editPrjmanagerDetails)

    router.put("/editPrjmanagerDetails/:companyID/:prjmanagerID", prjmanagerController.editPrjmanagerDetails)

    //count
    router.get("/getcount/:id", prjmanagerController.getcount);


module.exports = router;