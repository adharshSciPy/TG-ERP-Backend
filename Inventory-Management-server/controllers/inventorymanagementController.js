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

  deleteInventorymanagementDetails: async (req, res) => {
      const { companyID, inventorymanagementID } = req.params;
  
      try {
          const object = await Inventorymanagement.findById(companyID);
  
          if (!object) {
              return res.status(404).send('Object not found');
          }
  
          const nestedIndex = object.inventorymanagements.findIndex(
              nestedObj => nestedObj.id === inventorymanagementID
          );
  
          if (nestedIndex === -1) {
              return res.status(404).send('Nested object not found');
          }
  
          // Remove the nested object from the inventorymanagements array
          object.inventorymanagements.splice(nestedIndex, 1);
  
          await object.save();
  
          res.send('Object removed successfully');
      } catch (error) {
          console.error('Error deleting object:', error.message);
          return res.status(500).send('Internal Server Error');
      }
  },
  


  //put

   

editInventorymanagementDetails: async (req, res) => {
    const { companyID, inventorymanagementID } = req.params;
    const updatedInventorymanagementData = req.body;

    try {
        const object = await Inventorymanagement.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedInventory = object.inventorymanagements.find(
            nestedObj => nestedObj.id === inventorymanagementID
        );

        if (!nestedInventory) {
            return res.status(404).send('Nested object not found');
        }

        // Update the inventory's data with the provided updatedInventorymanagementData
        Object.assign(nestedInventory, updatedInventorymanagementData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
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