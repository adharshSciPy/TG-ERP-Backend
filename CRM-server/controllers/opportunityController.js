const Opportunity = require('../model/opportunitySchema');
module.exports = {
  createOpportunityCollection: async (req, res) => {
    const data = new Opportunity({
      companyId: req.body.companyId,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  createOpportunity: async (req, res) => {
    const data = new Opportunity({
      opportunitys: {
        OpportunityName: req.body.OpportunityName,
        SalesStage: req.body.SalesStage,
        Description: req.body.Description,
        CloseDate: req.body.CloseDate,
        Amount: req.body.Amount
      }
    });
    Opportunity.findByIdAndUpdate(req.params.id, { $push: { opportunitys: data.opportunitys } })
      .then(() => {
        res.status(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError");
      });
  },

  opportunityDetails: async (req, res) => {
    try {
      const user = await Opportunity.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteOpportunity: async (req, res) => {
    try {
      const user = await Opportunity.findByIdAndDelete(req.params.id);
      if (!user) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateOpportunity: async (req, res) => {
    try {
      await Opportunity.findByIdAndUpdate(req.params.id, {
        OpportunityName: req.body.OpportunityName,
        SalesStage: req.body.SalesStage,
        Description: req.body.Description,
        CloseDate: req.body.CloseDate,
        Amount: req.body.Amount
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  getOpportunity: async (req, res) => {
    const user = req.params;
    try {
      const data = await Opportunity.findById(user.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const opportunitys = await Opportunity.find({ companyId: id });
      if (!opportunitys || opportunitys.length === 0) {
        return res.status(404).json({ message: 'No opportunitys found.' });
      }
      const count = opportunitys[0].opportunitys.length;
      res.status(200).json({ message: 'Total number of opportunitys', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  }
}