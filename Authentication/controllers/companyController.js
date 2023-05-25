const Company = require("../models/companySchema");

module.exports = {

    // post

    addCompany: async (req, res) => {
        const data = new Company({
            CompanyName: req.body.CompanyName,
            TagLine: req.body.TagLine,
            EntityType: req.body.EntityType,
            Industry: req.body.Industry,
            NoOFEmployee: req.body.NoOFEmployee,
            YourDesignation: req.body.YourDesignation,
            DateOFIncoperation: req.body.DateOFIncoperation,
            PhoneNo: req.body.PhoneNo,
            Email: req.body.Email,
            Website: req.body.Website,
            Address: req.body.Address,
            CompanyDescription: req.body.CompanyDescription
        });
       
        console.log(data);

        try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log("Details added");
        }
        catch (error) {
        res.status(400).json({ message: error.message });
        }
    },

    //get

    getCompany: async (req, res) => {
        try {
        const company = await Company.find();
        res.json(company);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    },


    //delete

    deleteCompany: async (req, res) => {
        try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) throw Error("No user found");
        res.status(200).json({ success: true });
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    },


    //put

    editCompany: async (req, res) => {
        try {
            await Company.findByIdAndUpdate(req.params.id, {
                CompanyName: req.body.CompanyName,
                TagLine: req.body.TagLine,
                EntityType: req.body.EntityType,
                Industry: req.body.Industry,
                NoOFEmployee: req.body.NoOFEmployee,
                YourDesignation: req.body.YourDesignation,
                DateOFIncoperation: req.body.DateOFIncoperation,
                PhoneNo: req.body.PhoneNo,
                Email: req.body.Email,
                Website: req.body.Website,
                Address: req.body.Address,
                CompanyDescription: req.body.CompanyDescription
            });
            res.status(200).json("Successfully updated");
            } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
            }
    },


    // get by id

    getidCompany: async (req, res) => {
        const company = req.params;
        try {
        const data = await Company.findById(company.id);
        res.status(200).json(data);
        } catch (error) {
        console.log(error.message);
        }
    },

}