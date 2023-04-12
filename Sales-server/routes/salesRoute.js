const express = require("express");
const salesController = require("../controllers/salesController");


const router = express.Router();

// post

router.post("/sales", salesController.sales);

//get

router.get("/salesdetails", salesController.salesdetails);

//delete

router.delete("/deleteSales/:id", salesController.deleteSales);

//put

router.put("/updateSales/:id", salesController.updateSales);

// get by id

router.get("/getSales/:id", salesController.getSales);

module.exports = router;