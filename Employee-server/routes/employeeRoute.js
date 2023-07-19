const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

    // Post
    router.post("/createEmployeeCollection", userController.createEmployeeCollection)
    router.post("/addEmployee/:id", userController.addEmployee)

    // Get
    
    router.get("/employeeDetails", userController.employeeDetails)

    // Get by id 

    router.get("/getEmployee/:id", userController.getEmployee)
    router.get("/getEmployeeById/:id/:employeeID",userController.getEmployeebyId)

    // Delete

    // router.delete("/deleteEmployee/:id", userController.deleteEmployee)
    
    router.delete("/deleteEmployee/:companyID/:employeeID",userController.deleteEmployee)

    // Put

    // router.put("/editEmployee/:id", userController.editEmployee)

    router.put("/editEmployee/:companyID/:employeeID",userController.editEmployee)

    //count
    router.get("/getcount/:id", userController.getcount);


module.exports = router;