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
            }
        });
        Rfq.findByIdAndUpdate(req.params.id, { $push: { rfqs: data.rfqs } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
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

        Rfq.findById(companyID, (err, object) => {
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

            const nestedIndex = object.rfqs.findIndex(nestedObj => nestedObj.id === salesID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }

            object.rfqs.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object removed successfully');
            });

        })
    },

    updaterfq: async (req, res) => {
        const { companyID, salesID } = req.params;
        const updatedrfqData = req.body; // Assuming the updated data is sent in the request body

        Rfq.findById(companyID, (err, object) => {
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

            const nestedRfq = object.rfqs.find(nestedObj => nestedObj.id === salesID);
            console.log(nestedRfq)

            if (!nestedRfq) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedRfq, "here");
            }

            // Update the rfq's data with the provided updatedCustomerData
            Object.assign(nestedRfq, updatedrfqData);

            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object updated successfully');
            });
        });
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
            const rfqs = await Rfq.find({ companyId: id });
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