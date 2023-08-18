const purchaseRequisition = require('../models/purchaseRequisitionSchema');
module.exports = {
    createpurchaseRequisitionCollection: async (req, res) => {
        const data = new purchaseRequisition({
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
    purchaseRequisition: async (req, res) => {
        const data = new purchaseRequisition({
            purchaseRequisition: {
                RequisitionNo: req.body.RequisitionNo,
                RequisitionDate: req.body.RequisitionDate,
                Supplier: req.body.Supplier,
                Address: req.body.Address,
                City: req.body.City,
                State: req.body.State,
                PinCode: req.body.PinCode,
                FedId: req.body.FedId,
                Phone: req.body.Phone,
                Fax: req.body.Fax,
                OrganizationName: req.body.OrganizationName,
                Building: req.body.Building,
                RoomNumber: req.body.RoomNumber,
                AttentionDate: req.body.AttentionDate,
                PaymentTerms: req.body.PaymentTerms,
                FreightDue: req.body.FreightDue,
                FreightPaid: req.body.FreightPaid,
                Carrier: req.body.Carrier,
                FOB: req.body.FOB,
                Destination: req.body.Destination,
                FCA: req.body.FCA,
                Origin: req.body.Origin,
                SupplierNotes: req.body.SupplierNotes,
                Confirming: req.body.Confirming,
                Project:req.body.Project,
                Task:req.body.Task,
                Award:req.body.Award,
                ExpenditureType:req.body.ExpenditureType,
                OrganisationName:req.body.OrganisationName,
                Requisitioner:req.body.Requisitioner,
                Telephone:req.body.Telephone,
                purchaseReqItem:req.body.purchaseReqItem
            }
        });
        purchaseRequisition.findByIdAndUpdate(req.params.id, { $push: { purchaseRequisition: data.purchaseRequisition } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
                console.log(data.requisitions)
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },
    purchaseRequisitiondetails: async (req, res) => {
        try {
            const account = await purchaseRequisition.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // deleterfq: async (req, res) => {
    //     try {
    //         const sales = await Rfq.findByIdAndDelete(req.params.id);
    //         if (!sales) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

deletepurchaseRequisition: async (req, res) => {
    const { companyID, salesID } = req.params;

    try {
        const object = await PurchaseRequisition.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedIndex = object.purchaseRequisition.findIndex(
            nestedObj => nestedObj.id === salesID
        );

        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }

        object.purchaseRequisition.splice(nestedIndex, 1);
        await object.save();

        res.send('Object removed successfully');
    } catch (error) {
        console.error('Error deleting object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

updatepurchaseRequisition: async (req, res) => {
    const { companyID, salesID } = req.params;
    const updatedRequisitionData = req.body; // Assuming the updated data is sent in the request body

    try {
        const object = await PurchaseRequisition.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedRequisition = object.purchaseRequisition.find(
            nestedObj => nestedObj.id === salesID
        );

        if (!nestedRequisition) {
            return res.status(404).send('Nested object not found');
        }

        // Update the requisition's data with the provided updatedRequisitionData
        Object.assign(nestedRequisition, updatedRequisitionData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},



    getpurchaseRequisition: async (req, res) => {
        const purchase = req.params;
        try {
            const data = await purchaseRequisition.findById(purchase.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const requisitions = await purchaseRequisition.find({ _id: id });
            if (!requisitions || requisitions.length === 0) {
                return res.status(404).json({ message: 'No rfqs found.' });
            }
            const count = requisitions[0].purchaseRequisition.length;
            res.status(200).json({ message: 'Total number of rfqs', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getpurchaseRequisitionById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.RequisitionID;
        try {
            const data = await purchaseRequisition.findById(collection);

            const Requisitiondetails = data.purchaseRequisition.find(x => x._id == id)
            res.status(200).json(Requisitiondetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}