const Prjmanager = require("../models/prjmanagerSchema");
module.exports = {
  createPrjmanagerCollection: async (req, res) => {
    const data = new Prjmanager({
      companyId: req.body.companyId,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Deatils added");
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  // post

  addPrjmanagerDetails: async (req, res) => {
    const data = new Prjmanager({
      prjmanagers: {
        PrjName: req.body.PrjName,
        Type: req.body.Type,
        Description: req.body.Description,
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
      }
    });
    Prjmanager.findByIdAndUpdate(req.params.id, { $push: { prjmanagers: data.prjmanagers } })
      .then(() => {
        res.status(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError");
      });
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

  // deletePrjmanagerDetails: async (req, res) => {
  //   try {
  //     const prjmanager = await Prjmanager.findByIdAndDelete(req.params.id);
  //     if (!prjmanager) throw Error("No user found");
  //     res.status(200).json({ success: true });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },

  deletePrjmanagerDetails: async (req, res) => {
    const { companyID, prjmanagerID } = req.params;
    Prjmanager.findById(companyID, (err, object) => {
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

      const nestedIndex = object.prjmanagers.findIndex(nestedObj => nestedObj.id === prjmanagerID);
      if (nestedIndex === -1) {
        return res.status(404).send('Nested object not found');
      }
      else {
        console.log(nestedIndex);
      }

      object.prjmanagers.splice(nestedIndex, 1);
      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }
        res.send('Object removed successfully');
      });
    })

  },
  //put

  editPrjmanagerDetails: async (req, res) => {
    try {
      await Prjmanager.findByIdAndUpdate(req.params.id, {
        PrjName: req.body.PrjName,
        Type: req.body.Type,
        Description: req.body.Description,
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

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const prjmanagers = await Prjmanager.find({ companyId: id });
      if (!prjmanagers || prjmanagers.length === 0) {
        return res.status(404).json({ message: 'No prjmanagers found.' });
      }
      const count = prjmanagers[0].prjmanagers.length;
      res.status(200).json({ message: 'Total number of prjmanagers', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  }

}