const Rfq = require('../models/rfqSchema');
module.exports = {
    rfq: async (req, res) => {
        const data = new Rfq({
            RequisitionDate: req.body.RequisitionDate,
            PurchaseRequisition: req.body.PurchaseRequisition,
            TypeofRequisition: req.body.TypeofRequisition,
            JDERequisition: req.body.JDERequisition,
            Company: req.body.Company,
            CompanyCode: req.body.CompanyCode,
            RequisitorsName: req.body.RequisitorsName,
            ProjectName: req.body.ProjectName,
            ProjectCode: req.body.ProjectCode,
            Phone: req.body.Phone,
            Department: req.body.Department,
            DeliveryDate: req.body.DeliveryDate,
            Priority: req.body.Priority,
            PointofDelivery: req.body.PointofDelivery,
            Receivedby: req.body.Receivedby,
            Contactdetails: req.body.Contactdetails,
            Product: req.body.Product,
            Specialinstruction: req.body.Specialinstruction
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

    rfqdetails: async (req, res) => {
        try {
            const account = await Rfq.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleterfq: async (req, res) => {
        try {
            const sales = await Rfq.findByIdAndDelete(req.params.id);
            if (!sales) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updaterfq: async (req, res) => {
        try {
            await Rfq.findByIdAndUpdate(req.params.id, {
                RequisitionDate: req.body.RequisitionDate,
                PurchaseRequisition: req.body.PurchaseRequisition,
                TypeofRequisition: req.body.TypeofRequisition,
                JDERequisition: req.body.JDERequisition,
                Company: req.body.Company,
                CompanyCode: req.body.CompanyCode,
                RequisitorsName: req.body.RequisitorsName,
                ProjectName: req.body.ProjectName,
                ProjectCode: req.body.ProjectCode,
                Phone: req.body.Phone,
                Department: req.body.Department,
                DeliveryDate: req.body.DeliveryDate,
                Priority: req.body.Priority,
                PointofDelivery: req.body.PointofDelivery,
                Receivedby: req.body.Receivedby,
                Contactdetails: req.body.Contactdetails,
                Product: req.body.Product,
                Specialinstruction: req.body.Specialinstruction
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
        }
    },

    getrfq: async (req, res) => {
        const purchase = req.params;
        try {
            const data = await Rfq.findById(purchase.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },
}