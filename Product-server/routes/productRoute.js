const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

    // Post
    router.post("/createProductCollection", productController.createProductCollection)
    router.post("/addProductDetails/:id", productController.addProductDetails)

    // Get

    router.get("/getProductDetails", productController.getProductDetails)

    // Get by id

    router.get("/getidProductDetails/:id", productController.getidProductDetails)

    // Delete

    // router.delete("/deleteProductDetails/:id", productController.deleteProductDetails)

    router.delete("/deleteProductDetails/:companyID/:productID", productController.deleteProductDetails)

    // Put

    router.put("/editProductDetails/:id", productController.editProductDetails)

    //count
    router.get("/getcount/:id", productController.getcount);


module.exports = router;