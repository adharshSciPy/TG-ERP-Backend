const Inventorymanagement = require("../models/inventorymanagementSchema");
module.exports = {

  // post

  addInventorymanagementDetails: async (req, res) => {
    const data = new Inventorymanagement({
        SKUNo: req.body.SKUNo,
        ItemName: req.body.ItemName,
        UnitOFMeasurement: req.body.UnitOFMeasurement,
        ItemCategory: req.body.ItemCategory,
        CurrentStock: req.body.CurrentStock,
        Price: req.body.Price,
        Tax: req.body.Tax
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

  getInventorymanagementDetails: async (req, res) => {
    try {
      const inventorymanagement = await Inventorymanagement.find();
      res.json(inventorymanagement);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteInventorymanagementDetails: async (req, res) => {
    try {
      const inventorymanagement = await Inventorymanagement.findByIdAndDelete(req.params.id);
      if (!inventorymanagement) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editInventorymanagementDetails: async (req, res) => {
    try {
      await Inventorymanagement.findByIdAndUpdate(req.params.id, {
          SKUNo: req.body.SKUNo,
          ItemName: req.body.ItemName,
          UnitOFMeasurement: req.body.UnitOFMeasurement,
          ItemCategory: req.body.ItemCategory,
          CurrentStock: req.body.CurrentStock,
          Price: req.body.Price,
          Tax: req.body.Tax
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidInventorymanagementDetails: async (req, res) => {
    const inventorymanagement = req.params;
    try {
      const data = await Inventorymanagement.findById(inventorymanagement.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}