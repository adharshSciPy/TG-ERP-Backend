const Index = require("../models/index");

module.exports = {
    addIndex: async (req, res) => {
        const data = new Index({
          CompanyID : req.body.CompanyID,
          CrmID:req.body.CrmID
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


}