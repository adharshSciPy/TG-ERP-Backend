const Purchaseitem = require('../models/purchaseitemSchema');
module.exports = {
    createPurchaseitemCollection: async (req, res) => {
        const data = new Purchaseitem({
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
    purchaseitem: async (req, res) => {
        const data = new Purchaseitem({
            purchaseitems: {
                Type: req.body.Type,
                ItemCategory: req.body.ItemCategory,
                Item: req.body.Item,
                Quantity: req.body.Quantity,
                Unit: req.body.Unit,
                UnitPrize: req.body.UnitPrize,
                Total: req.body.Total
            }
        });
        Purchaseitem.findByIdAndUpdate(req.params.id, { $push: { purchaseitems: data.purchaseitems } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },

    purchaseitemdetails: async (req, res) => {
        try {
            const account = await Purchaseitem.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // deletePurchaseitem: async (req, res) => {
    //     try {
    //         const sales = await Purchaseitem.findByIdAndDelete(req.params.id);
    //         if (!sales) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

    deletePurchaseitem: async (req, res) => {
        const { companyID, salesID } = req.params;
    
        Purchaseitem.findById(companyID, (err, object) => {
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
    
            const nestedIndex = object.purchaseitems.findIndex(nestedObj => nestedObj.id === salesID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }
    
            object.purchaseitems.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }
    
                res.send('Object removed successfully');
            });
    
        })
    },

    updatePurchaseitem: async (req, res) => {
        try {
            await Purchaseitem.findByIdAndUpdate(req.params.id, {
                Type: req.body.Type,
                ItemCategory: req.body.ItemCategory,
                Item: req.body.Item,
                Quantity: req.body.Quantity,
                Unit: req.body.Unit,
                UnitPrize: req.body.UnitPrize,
                Total: req.body.Total
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
        }
    },

    getPurchaseitem: async (req, res) => {
        const purchase = req.params;
        try {
            const data = await Purchaseitem.findById(purchase.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const purchaseitems = await Purchaseitem.find({ companyId: id });
            if (!purchaseitems || purchaseitems.length === 0) {
                return res.status(404).json({ message: 'No purchaseitems found.' });
            }
            const count = purchaseitems[0].purchaseitems.length;
            res.status(200).json({ message: 'Total number of purchaseitems', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    }
}