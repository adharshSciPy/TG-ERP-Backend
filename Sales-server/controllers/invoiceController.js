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

    // deleteInvoice: async (req, res) => {
    //     try {
    //         const invoice = await Invoice.findByIdAndDelete(req.params.id);
    //         if (!invoice) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

    deleteInvoice: async (req, res) => {
        const { companyID, invoiceID } = req.params;

        Invoice.findById(companyID, (err, object) => {
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

            const nestedIndex = object.invoices.findIndex(nestedObj => nestedObj.id === invoiceID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }

            object.invoices.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object removed successfully');
            });

        })
    },

    updateInvoice: async (req, res) => {
        const { companyID, invoiceID } = req.params;
        const updatedinvoiceData = req.body; // Assuming the updated data is sent in the request body

        Invoice.findById(companyID, (err, object) => {
            if (err) {
                console.error('Error finding object:', err);
                return res.status(500).send('Internal Server Error');
            }

            if (!object) {
                return res.status(404).send('Object not found');
            }
            else {
                console.log("ok");
            }

            const nestedInvoice = object.invoices.find(nestedObj => nestedObj.id === invoiceID);
            console.log(nestedInvoice)

            if (!nestedInvoice) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedInvoice, "here");
            }

            // Update the invoice's data with the provided updatedCustomerData
            Object.assign(nestedInvoice, updatedinvoiceData);

            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object updated successfully');
            });
        });
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

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const invoices = await Invoice.find({ companyId: id });
            if (!invoices || invoices.length === 0) {
                return res.status(404).json({ message: 'No invoices found.' });
            }
            const count = invoices[0].invoices.length;
            res.status(200).json({ message: 'Total number of invoices', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getInvoiceById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.InvoiceID;
        try {
            const data = await Invoice.findById(collection);

            const Invoicedetails = data.invoices.find(x => x._id == id)
            res.status(200).json(Invoicedetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}