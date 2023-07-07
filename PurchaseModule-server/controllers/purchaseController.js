const Purchase = require('../models/purchaseSchema');
module.exports = {
    createPurchaseCollection: async (req, res) => {
        const data = new Purchase({
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
    purchase: async (req, res) => {
        const data = new Purchase({
            purchases: {
                QuoteNo: req.body.QuoteNo,
                QuoteSubject: req.body.QuoteSubject,
                QuoteStage: req.body.QuoteStage,
                Notes: req.body.Notes,
                ValidUntil: req.body.ValidUntil,
                Terms: req.body.Terms,
                BillingAddress: req.body.BillingAddress,
                TaxInformation: req.body.TaxInformation,
                TotalAmount: req.body.TotalAmount
            }
        });
        Purchase.findByIdAndUpdate(req.params.id, { $push: { purchases: data.purchases } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },

    purchasedetails: async (req, res) => {
        try {
            const account = await Purchase.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // deletePurchase: async (req, res) => {
    //     try {
    //         const sales = await Purchase.findByIdAndDelete(req.params.id);
    //         if (!sales) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

    deletePurchase: async (req, res) => {
        const { companyID, salesID } = req.params;
    
        Purchase.findById(companyID, (err, object) => {
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
    
            const nestedIndex = object.purchases.findIndex(nestedObj => nestedObj.id === salesID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }
    
            object.purchases.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }
    
                res.send('Object removed successfully');
            });
    
        })
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

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const purchases = await Purchase.find({ companyId: id });
            if (!purchases || purchases.length === 0) {
                return res.status(404).json({ message: 'No purchases found.' });
            }
            const count = purchases[0].purchases.length;
            res.status(200).json({ message: 'Total number of purchases', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getPurchaseById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.PurchaseID;
        try {
          const data = await Purchase.findById(collection);
    
          const Purchasedetails = data.purchases.find(x => x._id ==id)
          res.status(200).json(Purchasedetails);
        } catch (error) {
          console.log(error.message);
        }
      },
}