const Product = require("../models/productSchema");
module.exports = {

  // post

  addProductDetails: async (req, res) => {
    const data = new Product({
        Name: req.body.Name,
        Ribbon: req.body.Ribbon,
        Description: req.Description,
        Category: req.body.Category,
        Tax: req.body.Tax,
        Fulfilledby: req.body.Fulfilledby,
        Brand: req.body.Brand,

        //

        Price: req.body.Price,
        OnSale: req.body.OnSale,
        ShowPricePerUnit: req.body.ShowPricePerUnit,
        CostOFGoods: req.body.CostOFGoods,
        Profit: req.body.Profit,
        Margin: req.body.Margin,

        // Product Option 

        Type: req.body.Type,
        Choice: req.body.Choice,

        // Inventory of Shipping

        Status: req.body.Status,
        SKU: req.body.SKU
    });
    console.log(data);

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //get

  getProductDetails: async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteProductDetails: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editProductDetails: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name,
        Ribbon: req.body.Ribbon,
        Description: req.Description,
        Category: req.body.Category,
        Tax: req.body.Tax,
        Fulfilledby: req.body.Fulfilledby,
        Brand: req.body.Brand,

        //

        Price: req.body.Price,
        OnSale: req.body.OnSale,
        ShowPricePerUnit: req.body.ShowPricePerUnit,
        CostOFGoods: req.body.CostOFGoods,
        Profit: req.body.Profit,
        Margin: req.body.Margin,

        // Product Option 

        Type: req.body.Type,
        Choice: req.body.Choice,

        // Inventory of Shipping

        Status: req.body.Status,
        SKU: req.body.SKU
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidProductDetails: async (req, res) => {
    const product = req.params;
    try {
      const data = await Product.findById(product.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}