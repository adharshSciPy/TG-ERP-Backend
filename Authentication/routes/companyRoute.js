const express = require("express");
const companyController = require("../controllers/companyController");

const router = express.Router();

    // Post

    router.post("/addCompany", companyController.addCompany)

    // Get

    router.get("/getCompany", companyController.getCompany)

    // Get by id

    router.get("/getidCompany/:id", companyController.getidCompany)

    // Delete

    router.delete("/deleteCompany/:id", companyController.deleteCompany)

    // Put

    router.put("/editCompany/:id", companyController.editCompany)


module.exports = router;