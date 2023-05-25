const Purchase = require('../models/purchaseSchema');
module.exports = {
    purchase: async (req, res) => {
        const data = new Purchase({
            QuoteNo: req.body.QuoteNo,
            QuoteSubject: req.body.QuoteSubject,
            QuoteStage: req.body.QuoteStage,
            Notes: req.body.Notes,
            ValidUntil: req.body.ValidUntil,
            Terms: req.body.Terms,
            BillingAddress: req.body.BillingAddress,
            TaxInformation: req.body.TaxInformation,
            TotalAmount: req.body.TotalAmount
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

    purchasedetails: async (req, res) => {
        try {
            const account = await Purchase.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deletePurchase: async (req, res) => {
        try {
            const sales = await Purchase.findByIdAndDelete(req.params.id);
            if (!sales) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updatePurchase: async (req, res) => {
        try {
            await Purchase.findByIdAndUpdate(req.params.id, {
                QuoteNo: req.body.QuoteNo,
                QuoteSubject: req.body.QuoteSubject,
                QuoteStage: req.body.QuoteStage,
                Notes: req.body.Notes,
                ValidUntil: req.body.ValidUntil,
                Terms: req.body.Terms,
                BillingAddress: req.body.BillingAddress,
                TaxInformation: req.body.TaxInformation,
                TotalAmount: req.body.TotalAmount
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
        }
    },

    getPurchase: async (req, res) => {
        const purchase = req.params;
        try {
            const data = await Purchase.findById(purchase.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },
}