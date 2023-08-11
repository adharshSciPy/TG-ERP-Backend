const Sales = require("../models/salesSchema");
module.exports = {
  createSalesCollection: async (req, res) => {
    const data = new Sales({
      companyId: req.body.companyId,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    } catch (error) {
      res.status(400).json({ meesage: error.message });
    }
  },
  sales: async (req, res) => {
    console.log(req.body.SalesDate);
    const data = new Sales({
      saless: {
        CustomerName: req.body.CustomerName,
        CustomerId: req.body.CustomerId,
        Address: req.body.Address,
        Email: req.body.Email,
        Phone: req.body.Phone,
        SalesPerson: req.body.SalesPerson,
        EmpId: req.body.EmpId,
        SalesDate: req.body.SalesDate,
        OrderNumber: req.body.OrderNumber,
        SalesItems: req.body.SalesItems,
      },
    });
    Sales.findByIdAndUpdate(req.params.id, { $push: { saless: data.saless } })
      .then(() => {
        res.status(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error("Failed to add address:", err);
        res.status(500).json("ServerError");
      });
  },

  salesdetails: async (req, res) => {
    try {
      const account = await Sales.find();
      res.json(account);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // deleteSales: async (req, res) => {
  //     try {
  //         const sales = await Sales.findByIdAndDelete(req.params.id);
  //         if (!sales) throw Error("No user found");
  //         res.status(200).json({ success: true });
  //     } catch (error) {
  //         res.status(500).json({ message: error.message });
  //     }
  // },

  deleteSales: async (req, res) => {
    const { companyID, salesID } = req.params;
  
    try {
      const object = await Sales.findById(companyID).exec();
  
      if (!object) {
        return res.status(404).send("Object not found");
      }
  
      const nestedIndex = object.saless.findIndex(
        (nestedObj) => nestedObj.id === salesID
      );
  
      if (nestedIndex === -1) {
        return res.status(404).send("Nested object not found");
      }
  
      object.saless.splice(nestedIndex, 1);
      await object.save();
  
      res.send("Object removed successfully");
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  

  updateSales: async (req, res) => {
    const { companyID, salesID } = req.params;
    const updatedSalesData = req.body;
  
    try {
      const object = await Sales.findById(companyID).exec();
  
      if (!object) {
        return res.status(404).send("Object not found");
      }
  
      const nestedSales = object.saless.find(
        (nestedObj) => nestedObj.id === salesID
      );
  
      if (!nestedSales) {
        return res.status(404).send("Nested object not found");
      }
  
      Object.assign(nestedSales, updatedSalesData);
  
      await object.save();
  
      res.send("Object updated successfully");
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  

  getSales: async (req, res) => {
    const sales = req.params;
    try {
      const data = await Sales.findById(sales.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const saless = await Sales.find({ companyId: id });
      if (!saless || saless.length === 0) {
        return res.status(404).json({ message: "No saless found." });
      }
      const count = saless[0].saless.length;
      res.status(200).json({ message: "Total number of saless", count });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the count." });
    }
  },
  getSalesById: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.SalesID;
    try {
      const data = await Sales.findById(collection);

      const Salesdetails = data.saless.find((x) => x._id == id);
      res.status(200).json(Salesdetails);
    } catch (error) {
      console.log(error.message);
    }
  },
  getIndex: async (req, res) => {
    const sales = req.params;
    try {
        const Rdata = await Sales.findById(sales.id);
        const data = Rdata.saless.sort((a, b) => b.createdAt - a.createdAt);
        res.status(200).json(data[0].OrderNumber);
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }117
  },
};
