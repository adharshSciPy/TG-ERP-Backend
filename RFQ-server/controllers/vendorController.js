const Vendor = require('../models/vendorSchema');
module.exports = {
    createVendorCollection: async (req, res) => {
        const data = new Vendor({
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
    vendor: async (req, res) => {
        const data = new Vendor({
            vendors: {
                VendorID: req.body.VendorID,
                VendorName: req.body.VendorName,
                VendorAddress: req.body.VendorAddress,
                City: req.body.City,
                State: req.body.State,
                Postal: req.body.Postal,
                Country: req.body.Country,
                PhoneNumber: req.body.PhoneNumber,
                Email: req.body.Email,
                Website: req.body.Website,
                BusinessDescription: req.body.BusinessDescription,
                BusinessRegistrationNumber: req.body.BusinessRegistrationNumber,
                TaxIdentificationNumber: req.body.TaxIdentificationNumber,
                OwnershipInformation: req.body.OwnershipInformation,
                FinancialInformation: req.body.FinancialInformation,
                Certifications: req.body.Certifications,
                References: req.body.References,
                ContractualTerms: req.body.ContractualTerms,
                Product: req.body.Product,
                Delivery: req.body.Delivery
            }
        });
        Vendor.findByIdAndUpdate(req.params.id, { $push: { vendors: data.vendors } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },
    vendordetails: async (req, res) => {
        try {
            const account = await Vendor.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // deletevendor: async (req, res) => {
    //     try {
    //         const sales = await Vendor.findByIdAndDelete(req.params.id);
    //         if (!sales) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

deletevendor: async (req, res) => {
    const { companyID, salesID } = req.params;

    try {
        const object = await Vendor.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedIndex = object.vendors.findIndex(nestedObj => nestedObj.id === salesID);

        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }

        object.vendors.splice(nestedIndex, 1);
        await object.save();

        res.send('Object removed successfully');
    } catch (error) {
        console.error('Error deleting object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

updatevendor: async (req, res) => {
    const { companyID, salesID } = req.params;
    const updatedvendorData = req.body; // Assuming the updated data is sent in the request body

    try {
        const object = await Vendor.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedVendor = object.vendors.find(nestedObj => nestedObj.id === salesID);

        if (!nestedVendor) {
            return res.status(404).send('Nested object not found');
        }

        // Update the vendor's data with the provided updatedvendorData
        Object.assign(nestedVendor, updatedvendorData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

    getvendor: async (req, res) => {
        const purchase = req.params;
        try {
            const data = await Vendor.findById(purchase.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const vendors = await Vendor.find({ companyId: id });
            if (!vendors || vendors.length === 0) {
                return res.status(404).json({ message: 'No vendors found.' });
            }
            const count = vendors[0].vendors.length;
            res.status(200).json({ message: 'Total number of vendors', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getvendorById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.VendorID;
        try {
            const data = await Vendor.findById(collection);

            const Vendorsdetails = data.vendors.find(x => x._id == id)
            res.status(200).json(Vendorsdetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}