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

    // Delete

    router.delete("/deletePrjmanagerDetails/:id", prjmanagerController.deletePrjmanagerDetails)

    // Put

    router.put("/editPrjmanagerDetails/:id", prjmanagerController.editPrjmanagerDetails)

    //count
    router.get("/getcount/:id", prjmanagerController.getcount);


module.exports = router;