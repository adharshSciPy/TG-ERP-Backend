const Inventorymanagement = require("../models/inventorymanagementSchema");
module.exports = {


  createInventorymanagementCollection: async (req, res) => {
    const data = new Inventorymanagement({
      companyId: req.body.companyId,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  // post
  addInventorymanagementDetails: async (req, res) => {
    const data = new Inventorymanagement({
      inventorymanagements: {
        SKUNo: req.body.SKUNo,
        ItemName: req.body.ItemName,
        UnitOFMeasurement: req.body.UnitOFMeasurement,
        ItemCategory: req.body.ItemCategory,
        CurrentStock: req.body.CurrentStock,
        Price: req.body.Price,
        Dimension: req.body.Dimension,
        Height: req.body.Height,
        Manufacturer: req.body.Manufacturer,
        Brand: req.body.Brand,
        ExpiryDate: req.body.ExpiryDate,
        // Tax: req.body.Tax,
        // HSNCode: req.body.HSNCode,
        // BuyOrSell: req.body.BuyOrSell,
      }
    });
    Inventorymanagement.findByIdAndUpdate(req.params.id, { $push: { inventorymanagements: data.inventorymanagements } })
      .then(() => {
        res.status(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError");
      });
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

  // deleteInventorymanagementDetails: async (req, res) => {
  //   try {
  //     const inventorymanagement = await Inventorymanagement.findByIdAndDelete(req.params.id);
  //     if (!inventorymanagement) throw Error("No user found");
  //     res.status(200).json({ success: true });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },

  deleteInventorymanagementDetails: async (req, res) => {
    const { companyID, inventorymanagementID } = req.params;
    Inventorymanagement.findById(companyID, (err, object) => {
      if (err) {
        console.error('Error finding object:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (!object) {
        return res.status(404).send('Object not found');
      }
      else {
        console.log(object);
      }

      const nestedIndex = object.inventorymanagements.findIndex(nestedObj => nestedObj.id === inventorymanagementID);
      if (nestedIndex === -1) {
        return res.status(404).send('Nested object not found');
      }
      else {
        console.log(nestedIndex);
      }

      object.inventorymanagements.splice(nestedIndex, 1);
      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }
        res.send('Object removed successfully');
      });
    })
  },


  //put

  editInventorymanagementDetails: async (req, res) => {
    const { companyID, inventorymanagementID } = req.params;
    const updatedinventorymanagementData = req.body; // Assuming the updated data is sent in the request body

    Inventorymanagement.findById(companyID, (err, object) => {
      if (err) {
        console.error('Error finding object:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (!object) {
        return res.status(404).send('Object not found');
      }
      else {
        console.log("ok");
      }

      const nestedInventory = object.inventorymanagements.find(nestedObj => nestedObj.id === inventorymanagementID);
      console.log(nestedInventory)

      if (!nestedInventory) {
        return res.status(404).send('Nested object not found');
      }
      else {
        console.log(nestedInventory, "here");
      }

      // Update the inventory's data with the provided updatedCustomerData
      Object.assign(nestedInventory,updatedinventorymanagementData);

      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }

        res.send('Object updated successfully');
      });
    });
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

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const inventorymanagements = await Inventorymanagement.find({ _id: id });
      if (!inventorymanagements || inventorymanagements.length === 0) {
        return res.status(404).json({ message: 'No inventorymanagements found.' });
      }
      const count = inventorymanagements[0].inventorymanagements.length;
      res.status(200).json({ message: 'Total number of inventorymanagements', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  },
  getidInventorymanagementDetailss: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.inventorymanagementID;
    try {
      const data = await Inventorymanagement.findById(collection);

      const InventorymanagementDetails = data.inventorymanagements.find(x => x._id == id)
      res.status(200).json(InventorymanagementDetails);
    } catch (error) {
      console.log(error.message);
    }

  },
}