const Sales = require('../models/salesSchema');
module.exports = {
    createSalesCollection: async (req, res) => {
        const data = new Sales({
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
    sales: async (req, res) => {
        const data = new Sales({
            saless: {
                OrderNumber: req.body.OrderNumber,
                Product: req.body.Product,
                Day: req.body.Day,
                Month: req.body.Month,
                Year: req.body.Year,
                Status: req.body.Status,
                TotalAmount: req.body.TotalAmount
            }
        });
        Sales.findByIdAndUpdate(req.params.id, { $push: { saless: data.saless } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
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

    deleteSales: async (req, res) => {
        try {
            const sales = await Sales.findByIdAndDelete(req.params.id);
            if (!sales) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateSales: async (req, res) => {
        try {
            await Sales.findByIdAndUpdate(req.params.id, {
                OrderNumber: req.body.OrderNumber,
                Product: req.body.Product,
                Day: req.body.Day,
                Month: req.body.Month,
                Year: req.body.Year,
                Status: req.body.Status,
                TotalAmount: req.body.TotalAmount
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
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
                return res.status(404).json({ message: 'No saless found.' });
            }
            const count = saless[0].saless.length;
            res.status(200).json({ message: 'Total number of saless', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    }
}