const express = require("express");
const invoiceController = require("../controllers/invoiceController");


const router = express.Router();

// post
router.post("/createInvoiceCollection", invoiceController.createInvoiceCollection)
router.post("/invoice/:id", invoiceController.invoice);

//get

router.get("/invoicedetails", invoiceController.invoicedetails);

//delete

// router.delete("/deleteInvoice/:id", invoiceController.deleteInvoice);

router.delete("/deleteInvoice/:companyID/:invoiceID", invoiceController.deleteInvoice)

//put

router.put("/updateInvoice/:id", invoiceController.updateInvoice);

// get by id

router.get("/getInvoice/:id", invoiceController.getInvoice);

//count
router.get("/getcount/:id", invoiceController.getcount);

module.exports = router;