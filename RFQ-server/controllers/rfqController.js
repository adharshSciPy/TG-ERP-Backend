const Rfq = require('../models/rfqSchema');
module.exports = {
    createRfqCollection: async (req, res) => {
        const data = new Rfq({
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
    rfq: async (req, res) => {
        const data = new Rfq({
            rfqs: {
                Day: req.body.Day,
                Month: req.body.Month,
                Year: req.body.Year,
                PurchaseRequisition: req.body.PurchaseRequisition,
                TypeofRequisition: req.body.TypeofRequisition,
                JDERequisition: req.body.JDERequisition,
                Company: req.body.Company,
                CompanyCode: req.body.CompanyCode,
                RequestorsName: req.body.RequestorsName,
                ProjectName: req.body.ProjectName,
                ProjectCode: req.body.ProjectCode,
                Phone: req.body.Phone,
                Department: req.body.Department,
                DeliveryDate: req.body.DeliveryDate,
                Priority: req.body.Priority,
                PointofDelivery: req.body.PointofDelivery,
                Receivedby: req.body.Receivedby,
                Position: req.body.Position,
                TelephoneNo: req.body.TelephoneNo,
                Email: req.body.Email,
                Specialinstruction: req.body.Specialinstruction,
                Attachments: req.body.Attachments,
                Authorization: req.body.Authorization,
                rfqsItem: req.body.rfqsItem,
            }
        });
        Rfq.findByIdAndUpdate(req.params.id, { $push: { rfqs: data.rfqs } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
                console.log(data.rfqs)
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },
    rfqdetails: async (req, res) => {
        try {
            const account = await Rfq.find();
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

deleterfq: async (req, res) => {
    const { companyID, salesID } = req.params;

    try {
        const object = await Rfq.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedIndex = object.rfqs.findIndex(nestedObj => nestedObj.id === salesID);

        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }

        object.rfqs.splice(nestedIndex, 1);
        await object.save();

        res.send('Object removed successfully');
    } catch (error) {
        console.error('Error deleting object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

updaterfq: async (req, res) => {
    const { companyID, salesID } = req.params;
    const updatedrfqData = req.body;

    try {
        const object = await Rfq.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedRfq = object.rfqs.find(nestedObj => nestedObj.id === salesID);

        if (!nestedRfq) {
            return res.status(404).send('Nested object not found');
        }

        // Update the rfq's data with the provided updatedrfqData
        Object.assign(nestedRfq, updatedrfqData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
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

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const rfqs = await Rfq.find({ _id: id });
            if (!rfqs || rfqs.length === 0) {
                return res.status(404).json({ message: 'No rfqs found.' });
            }
            const count = rfqs[0].rfqs.length;
            res.status(200).json({ message: 'Total number of rfqs', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getrfqById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.rfqID;
        try {
            const data = await Rfq.findById(collection);

            const Rfqdetails = data.rfqs.find(x => x._id == id)
            res.status(200).json(Rfqdetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}