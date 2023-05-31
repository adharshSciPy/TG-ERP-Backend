const Invoice = require('../models/invoiceSchema');
module.exports = {
    createInvoiceCollection: async (req, res) => {
        const data = new Invoice({
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
    invoice: async (req, res) => {
        const data = new Invoice({
            invoices: {
                InvoiceNumber: req.body.InvoiceNumber,
                InvoiceSubject: req.body.InvoiceSubject,
                Notes: req.body.Notes,
                Terms: req.body.Terms,
                InvoiceDate: req.body.InvoiceDate,
                DueDate: req.body.DueDate,
                AmountDue: req.body.AmountDue,
                QuoteNo: req.body.QuoteNo,
                OrderNo: req.body.OrderNo,
                PurchaseOrderNo: req.body.PurchaseOrderNo,
                BillingAddress: req.body.BillingAddress,
                TaxInformation: req.body.TaxInformation
            }

        });
        Invoice.findByIdAndUpdate(req.params.id, { $push: { invoices: data.invoices } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },

    invoicedetails: async (req, res) => {
        try {
            const invoice = await Invoice.find();
            res.json(invoice);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteInvoice: async (req, res) => {
        try {
            const invoice = await Invoice.findByIdAndDelete(req.params.id);
            if (!invoice) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateInvoice: async (req, res) => {
        try {
            await Invoice.findByIdAndUpdate(req.params.id, {
                InvoiceNumber: req.body.InvoiceNumber,
                InvoiceSubject: req.body.InvoiceSubject,
                Notes: req.body.Notes,
                Terms: req.body.Terms,
                InvoiceDate: req.body.InvoiceDate,
                DueDate: req.body.DueDate,
                AmountDue: req.body.AmountDue,
                QuoteNo: req.body.QuoteNo,
                OrderNo: req.body.OrderNo,
                PurchaseOrderNo: req.body.PurchaseOrderNo,
                BillingAddress: req.body.BillingAddress,
                TaxInformation: req.body.TaxInformation,
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
        }
    },

    getInvoice: async (req, res) => {
        const invoice = req.params;
        try {
            const data = await Invoice.findById(invoice.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },
}