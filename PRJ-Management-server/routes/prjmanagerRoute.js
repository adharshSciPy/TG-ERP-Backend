const express = require("express");
const prjmanagerController = require("../controllers/prjmanagerController");

const router = express.Router();

    // Post

    router.post("/addPrjmanagerDetails", prjmanagerController.addPrjmanagerDetails)

    // Get

    router.get("/getPrjmanagerDetails", prjmanagerController.getPrjmanagerDetails)

    // Get by id

    router.get("/getidPrjmanagerDetails/:id", prjmanagerController.getidPrjmanagerDetails)

    // Delete

    router.delete("/deletePrjmanagerDetails/:id", prjmanagerController.deletePrjmanagerDetails)

    // Put

    router.put("/editPrjmanagerDetails/:id", prjmanagerController.editPrjmanagerDetails)


module.exports = router;