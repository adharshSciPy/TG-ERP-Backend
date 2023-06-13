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

    deletePurchaseorder: async (req, res) => {
        try {
            const sales = await Purchaseorder.findByIdAndDelete(req.params.id);
            if (!sales) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updatePurchaseorder: async (req, res) => {
        try {
            await Purchaseorder.findByIdAndUpdate(req.params.id, {
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
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
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
    }
}