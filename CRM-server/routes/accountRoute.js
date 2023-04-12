const express = require("express");
const accountController = require('../controllers/accountController');


const router = express.Router();

// post

router.post("/createAccount", accountController.createAccount);

//get

router.get("/getAccount", accountController.accountDetails);

//delete

router.delete("/deleteAccount/:id", accountController.deleteAccount);

//put

router.put("/updateAccount/:id", accountController.updateAccount);

// get by id

router.get("/getEmployee/:id", accountController.getEmployee);

module.exports = router;