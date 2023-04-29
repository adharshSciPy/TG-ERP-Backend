const express = require("express");
const inventorymanagementController = require("../controllers/inventorymanagementController");

const router = express.Router();

    // Post

    router.post("/addInventorymanagementDetails", inventorymanagementController.addInventorymanagementDetails)

    // Get

    router.get("/getInventorymanagementDetails", inventorymanagementController.getInventorymanagementDetails)

    // Get by id

    router.get("/getidInventorymanagementDetails/:id", inventorymanagementController.getidInventorymanagementDetails)

    // Delete

    router.delete("/deleteInventorymanagementDetails/:id", inventorymanagementController.deleteInventorymanagementDetails)

    // Put

    router.put("/editInventorymanagementDetails/:id", inventorymanagementController.editInventorymanagementDetails)


module.exports = router;