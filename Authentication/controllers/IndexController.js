const Index = require("../models/index");

module.exports = {
    addIndex: async (req, res) => {
        const data = new Index({
          CompanyID : req.body.CompanyID,
          CrmID:req.body.CrmID,
          EmployeeID :req.body.EmployeeID,
          InventoryID: req.body.Inventory,
          PRJID: req.body.PRJ,
          ProductID: req.body.ProductID,
          PurchaseID: req.body.PurchaseID,
          PurchaseorderID: req.body.PurchaseorderID,
          PurchaseitemID:req.body.PurchaseitemID,
          RFQID: req.body.RFQID,
          InvoiceID: req.body.InvoiceID,
          SalesID: req.body.SalesID,
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


}