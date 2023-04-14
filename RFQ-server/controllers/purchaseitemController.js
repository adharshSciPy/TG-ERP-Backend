const Purchaseitem = require('../models/purchaseitemSchema');
module.exports = {
    purchaseitem: async (req, res) => {
        const data = new Purchaseitem({
            Type: req.body.Type,
            ItemCategory: req.body.ItemCategory,
            Item: req.body.Item,
            Quantity: req.body.Quantity,
            Unit: req.body.Unit,
            UnitPrize: req.body.UnitPrize,
            Total: req.body.Total
        });
        console.log(data);

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
            console.log("Details added");
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    purchaseitemdetails: async (req, res) => {
        try {
            const account = await Purchaseitem.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deletePurchaseitem: async (req, res) => {
        try {
            const sales = await Purchaseitem.findByIdAndDelete(req.params.id);
            if (!sales) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
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
}