const Opportunity = require('../model/opportunitySchema');
module.exports = {
  createOpportunity: async (req, res) => {
    const data = new Opportunity({
      OpportunityName: req.body.OpportunityName,
      SalesStage: req.body.SalesStage,
      Description: req.body.Description,
      CloseDate: req.body.CloseDate,
      Amount: req.body.Amount
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
  }
}