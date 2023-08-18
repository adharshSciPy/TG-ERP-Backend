const Purchaseorder = require('../models/purchaseorderSchema');
module.exports = {
    createPurchaseorderCollection: async (req, res) => {
        const data = new Purchaseorder({
            companyId: req.body.companyId,
        });
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
            console.log("Details added");
        }
        catch (error) {
            res.status(400).json({ meesage: error.message })
        }
    },
    purchaseorder: async (req, res) => {
        const data = new Purchaseorder({
            purchaseorders: {
                VendorName: req.body.VendorName,
                VendorStreetAdress: req.body.VendorStreetAdress,
                VendorCity: req.body.VendorCity,
                VendorState: req.body.VendorState,
                VendorPinCode: req.body.VendorPinCode,
                VendorCountry: req.body.VendorCountry,
                VendorContact: req.body.VendorContact,
                DeliverToName: req.body.DeliverToName,
                DeliverStreetAdress: req.body.DeliverStreetAdress,
                DeliverState: req.body.DeliverState,
                DeliverPinCode: req.body.DeliverPinCode,
                DeliverCountry: req.body.DeliverCountry,
                DeliverContact: req.body.DeliverContact,
                PurchaseOrder: req.body.PurchaseOrder,
                Date: req.body.Date,
                CreditTerms: req.body.CreditTerms,
                Comments: req.body.Comments,
                TermsAndConditions: req.body.TermsAndConditions,
                SubTotal: req.body.SubTotal,
                Tax: req.body.Tax,
                Freight: req.body.Freight,
                Paid: req.body.Paid,
                Balance: req.body.Balance,
                PurchaseOrderItems: req.body.PurchaseOrderItems
            }
        });
        Purchaseorder.findByIdAndUpdate(req.params.id, { $push: { purchaseorders: data.purchaseorders } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
                console.log(data.purchaseorders)
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },

    purchaseorderdetails: async (req, res) => {
        try {
            const account = await Purchaseorder.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // deletePurchaseorder: async (req, res) => {
    //     try {
    //         const sales = await Purchaseorder.findByIdAndDelete(req.params.id);
    //         if (!sales) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

deletePurchaseorder: async (req, res) => {
    const { companyID, salesID } = req.params;

    try {
        const object = await Purchaseorder.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedIndex = object.purchaseorders.findIndex(
            nestedObj => nestedObj.id === salesID
        );

        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }

        // Remove the nested object from the purchaseorders array
        object.purchaseorders.splice(nestedIndex, 1);

        await object.save();

        res.send('Object removed successfully');
    } catch (error) {
        console.error('Error deleting object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

updatePurchaseorder: async (req, res) => {
    const { companyID, salesID } = req.params;
    const updatedpurchaseorderData = req.body; // Assuming the updated data is sent in the request body

    try {
        const object = await Purchaseorder.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedPurchaseorder = object.purchaseorders.find(
            nestedObj => nestedObj.id === salesID
        );

        if (!nestedPurchaseorder) {
            return res.status(404).send('Nested object not found');
        }

        // Update the purchaseorder's data with the provided updatedCustomerData
        Object.assign(nestedPurchaseorder, updatedpurchaseorderData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},


    getPurchaseorder: async (req, res) => {
        const purchase = req.params;
        try {
            const data = await Purchaseorder.findById(purchase.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const purchaseorders = await Purchaseorder.find({ _id: id });
            
            if (!purchaseorders || purchaseorders.length === 0) {
                return res.status(404).json({ message: 'No purchaseorders found.' });
            }
            const count = purchaseorders[0].purchaseorders.length;
            res.status(200).json({ message: 'Total number of purchaseorders', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getPurchaseorderById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.PurchaseorderID;
        try {
            const data = await Purchaseorder.findById(collection);

            const Purchaseorderdetails = data.purchaseorders.find(x => x._id == id)
            res.status(200).json(Purchaseorderdetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}