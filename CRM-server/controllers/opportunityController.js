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
    console.log(req.body);
    const data = new Opportunity({
      opportunitys: {
        OpportunityName: req.body.OpportunityName,
        Description: req.body.Description,
        LeadSource: req.body.LeadSource,
        CustomerName: req.body.CustomerName,
        CustomerId:req.body.CustomerId,
        AssignedTo : req.body.AssignedTo,
        FollowUp:req.body.FollowUp,
        CreatedBy:req.body.CreatedBy
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
    const { companyID, opportunityID } = req.params;
    
    Opportunity.findById(companyID, (err, object) => {
      if (err) {
        console.error('Error finding object:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (!object) {
        return res.status(404).send('Object not found');
      }
      else{
        console.log(object);
      }

      const nestedIndex = object.opportunitys.findIndex(nestedObj => nestedObj.id === opportunityID);
      if (nestedIndex === -1) {
        return res.status(404).send('Nested object not found');
      }
      else{
        console.log(nestedIndex);
      }

      object.opportunitys.splice(nestedIndex, 1);
      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }
  
        res.send('Object removed successfully');
      });
    
    })},

  updateOpportunity: async (req, res) => {
    try {
      await Opportunity.findByIdAndUpdate(req.params.id, {
        OpportunityName: req.body.OpportunityName,
        Description: req.body.Description,
        LeadSource: req.body.LeadSource,
        CustomerName: req.body.CustomerName,
        CustomerId:req.body.CustomerId,
        AssignedTo : req.body.AssignedTo,
        FollowUp:req.body.FollowUp,
        CreatedBy:req.body.CreatedBy
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
  },
  createFollowUp: async (req, res) => {
    const { companyID, opportunityID } = req.params;
    const {Title, Message, Status, CreatedBy} = req.body
    const  followUp ={
      Title:Title,
      Message:Message,
      Status:Status,
      CreatedBy:CreatedBy
    }

    try{
      const company = await Opportunity.findById(companyID)

      if(!company){
        return res.status(404).json({ error: 'Company not found' });
      }
      else{
        console.log("followUP get Company Success");
      }

      const opportunitybyID = await company.opportunitys.id(opportunityID)

      if(!opportunitybyID){
        return res.status(404).json({ error: 'opportunity not found' });
      }
      else{
        console.log("followUP get opportunity Success");
        opportunitybyID.FollowUp.push(followUp)
        await company.save()
        return res.status(200).json(opportunitybyID);
      }

    }
    catch(err){
      console.log(err);
    }
  }
}