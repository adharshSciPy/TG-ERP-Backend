const express = require("express");
const salesController = require("../controllers/salesController");


const router = express.Router();

// post
router.post("/createSalesCollection", salesController.createSalesCollection)
router.post("/sales/:id", salesController.sales);

//get

router.get("/salesdetails", salesController.salesdetails);

//delete

// router.delete("/deleteSales/:id", salesController.deleteSales);

router.delete("/deleteSales/:companyID/:salesID", salesController.deleteSales)

//put

// router.put("/updateSales/:id", salesController.updateSales);

router.put("/updateSales/:companyID/:salesID", salesController.updateSales);

// get by id

router.get("/getSales/:id", salesController.getSales);
router.get("/getSalesById/:id/:SalesID",salesController.getSalesById)

//count
router.get("/getcount/:id", salesController.getcount);

module.exports = router;