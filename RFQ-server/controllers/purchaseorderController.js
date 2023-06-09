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
                REQNo: req.body.REQNo,
                RequisitionDate: req.body.RequisitionDate,
                Supplier: req.body.Supplier,
                Address: req.body.Address,
                City: req.body.City,
                State: req.body.State,
                Zipcode: req.body.Zipcode,
                FedID: req.body.FedID,
                Phone: req.body.Phone,
                Email: req.body.Email,
                OrganizationName: req.body.OrganizationName,
                Building: req.body.Building,
                RoomNumber: req.body.RoomNumber,
                NeedbyDate: req.body.NeedbyDate,
                Due: req.body.Due,
                Paid: req.body.Paid,
                Carrier: req.body.Carrier,
                FOB: req.body.FOB,
                Destination: req.body.Destination,
                FCA: req.body.FCA,
                Orgin: req.body.Orgin,
                SupplierNote: req.body.SupplierNote,
                Confirmation: req.body.Confirmation,
                Task: req.body.Task,
                Award: req.body.Award,
                ExpendureType: req.body.ExpendureType,
                OrganizationName: req.body.OrganizationName,
                Requistioner: req.body.Requistioner,
                Phone: req.body.Phone,
                Date: req.body.Date
            }
        });
        Purchaseorder.findByIdAndUpdate(req.params.id, { $push: { purchaseorders: data.purchaseorders } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
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

        Purchaseorder.findById(companyID, (err, object) => {
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

            const nestedIndex = object.purchaseorders.findIndex(nestedObj => nestedObj.id === salesID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }

            object.purchaseorders.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object removed successfully');
            });

        })
    },

    updatePurchaseorder: async (req, res) => {
        const { companyID, salesID } = req.params;
        const updatedpurchaseorderData = req.body; // Assuming the updated data is sent in the request body

        Purchaseorder.findById(companyID, (err, object) => {
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

            const nestedPurchaseorder = object.purchaseorders.find(nestedObj => nestedObj.id === salesID);
            console.log(nestedPurchaseorder)

            if (!nestedPurchaseorder) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedPurchaseorder, "here");
            }

            // Update the purchaseorder's data with the provided updatedCustomerData
            Object.assign(nestedPurchaseorder, updatedpurchaseorderData);

            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object updated successfully');
            });
        });
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
            const purchaseorders = await Purchaseorder.find({ companyId: id });
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