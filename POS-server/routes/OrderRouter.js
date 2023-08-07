const express = require("express");
const OrderController = require("../controllers/OrderController");


const router = express.Router();

// post
router.post("/createorderCollection", OrderController.createorderCollection)
router.post("/order/:id", OrderController.order);

//get

router.get("/orderdetails", OrderController.orderdetails);

//delete

// router.delete("/deleteorder/:id", OrderController.deleteorder);

router.delete("/deleteorder/:companyID/:salesID", OrderController.deleteorder);

//put

// router.put("/updateorder/:id", OrderController.updateorder);

router.put("/updateorder/:companyID/:salesID", OrderController.updateorder);

// get by id

router.get("/getorder/:id", OrderController.getorder)
router.get("/getorderById/:id/:OrderID",OrderController.getorderById);
//count
router.get("/getcount/:id", OrderController.getcount);

module.exports = router;