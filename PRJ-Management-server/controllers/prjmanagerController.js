const Prjmanager = require("../models/prjmanagerSchema");
module.exports = {

  // post

  addPrjmanagerDetails: async (req, res) => {
    const data = new Prjmanager({
        PrjName: req.body.PrjName,
        Type: req.body.Type,
        Description: req.Description,
        Account: req.body.Account,
        AssignedTo: req.body.AssignedTo,
        Teams: req.body.Teams,

        // General

        Status: req.body.Status,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        UseTimesheet: req.body.UseTimesheet,
        Amount: req.body.Amount,
        LeadSource: req.body.LeadSource,
        Progress: req.body.Progress
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

  getPrjmanagerDetails: async (req, res) => {
    try {
      const prjmanager = await Prjmanager.find();
      res.json(prjmanager);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deletePrjmanagerDetails: async (req, res) => {
    try {
      const prjmanager = await Prjmanager.findByIdAndDelete(req.params.id);
      if (!prjmanager) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editPrjmanagerDetails: async (req, res) => {
    try {
      await Prjmanager.findByIdAndUpdate(req.params.id, {
        PrjName: req.body.PrjName,
        Type: req.body.Type,
        Description: req.Description,
        Account: req.body.Account,
        AssignedTo: req.body.AssignedTo,
        Teams: req.body.Teams,

        // General

        Status: req.body.Status,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        UseTimesheet: req.body.UseTimesheet,
        Amount: req.body.Amount,
        LeadSource: req.body.LeadSource,
        Progress: req.body.Progress

      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidPrjmanagerDetails: async (req, res) => {
    const prjmanager = req.params;
    try {
      const data = await Prjmanager.findById(prjmanager.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}