const express = require("express");
const invoiceController = require("../controllers/invoiceController");


const router = express.Router();

// post

router.post("/invoice", invoiceController.invoice);

//get

router.get("/invoicedetails", invoiceController.invoicedetails);

//delete

router.delete("/deleteInvoice/:id", invoiceController.deleteInvoice);

//put

router.put("/updateInvoice/:id", invoiceController.updateInvoice);

// get by id

router.get("/getInvoice/:id", invoiceController.getInvoice);

module.exports = router;