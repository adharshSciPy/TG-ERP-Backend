const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

    // Post

    router.post("/addEmployee", userController.addEmployee)

    // Get

    router.get("/employeeDetails", userController.employeeDetails)

    // Get by id

    router.get("/getEmployee/:id", userController.getEmployee)

    // Delete

    router.delete("/deleteEmployee/:id", userController.deleteEmployee)

    // Put

    router.put("/editEmployee/:id", userController.editEmployee)


module.exports = router;