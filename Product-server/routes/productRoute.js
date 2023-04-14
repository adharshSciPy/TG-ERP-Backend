const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

    // Post

    router.post("/addProductDetails", productController.addProductDetails)

    // Get

    router.get("/getProductDetails", productController.getProductDetails)

    // Get by id

    router.get("/getidProductDetails/:id", productController.getidProductDetails)

    // Delete

    router.delete("/deleteProductDetails/:id", productController.deleteProductDetails)

    // Put

    router.put("/editProductDetails/:id", productController.editProductDetails)


module.exports = router;