const Purchaseorder = require('../models/purchaseorderSchema');
module.exports = {
    purchaseorder: async (req, res) => {
        const data = new Purchaseorder({
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
}