const Customer = require('../model/customerSchema');
module.exports = {

  createCustomerCollection: async (req, res) => {
    const data = new Customer({
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


  createCustomer: async (req, res) => {

    const data = new Customer({
      customers: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PrimaryAccount: req.body.PrimaryAccount,
        Title: req.body.Title,
        PhoneWork: req.body.PhoneWork,
        PhoneHome: req.body.PhoneHome,
        PhoneMobile: req.body.PhoneMobile,
        PhoneOther: req.body.PhoneOther,
        Website: req.body.Website,
        Assigned: req.body.Assigned,
        Teams: req.body.Teams,
        Partner: req.body.Partner,
        Category: req.body.Category,
        Department: req.body.Department,
        BusinessRole: req.body.BusinessRole,
        Reports: req.body.Reports,
        AssistantPh: req.body.AssistantPh,
        PrimaryCity: req.body.PrimaryCity,
        PrimaryState: req.body.PrimaryState,
        PrimaryCountry: req.body.PrimaryCountry,
        PrimaryPostal: req.body.PrimaryPostal,
        SecondaryCity: req.body.SecondaryCity,
        SecondaryState: req.body.SecondaryState,
        SecondaryCountry: req.body.SecondaryCountry,
        SecondaryPostal: req.body.SecondaryPostal,
        Description: req.body.Description
      }
    });
    Customer.findByIdAndUpdate(req.params.id, { $push: { customers: data.customers } })
      .then(() => {
        res.status(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError");
      });


  },
  customerDetails: async (req, res) => {
    try {
      const user = await Customer.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteCustomer: async (req, res) => {
    try {
      const user = await Customer.findByIdAndDelete(req.params.id);
      if (!user) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateCustomer: async (req, res) => {
    try {
      await Customer.findByIdAndUpdate(req.params.id, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PrimaryAccount: req.body.PrimaryAccount,
        Title: req.body.Title,
        PhoneWork: req.body.PhoneWork,
        PhoneHome: req.body.PhoneHome,
        PhoneMobile: req.body.PhoneMobile,
        PhoneOther: req.body.PhoneOther,
        Website: req.body.Website,
        Assigned: req.body.Assigned,
        Teams: req.body.Teams,
        Partner: req.body.Partner,
        Category: req.body.Category,
        Department: req.body.Department,
        BusinessRole: req.body.BusinessRole,
        Reports: req.body.Reports,
        AssistantPh: req.body.AssistantPh,
        PrimaryCity: req.body.PrimaryCity,
        PrimaryState: req.body.PrimaryState,
        PrimaryCountry: req.body.PrimaryCountry,
        PrimaryPostal: req.body.PrimaryPostal,
        SecondaryCity: req.body.SecondaryCity,
        SecondaryState: req.body.SecondaryState,
        SecondaryCountry: req.body.SecondaryCountry,
        SecondaryPostal: req.body.SecondaryPostal,
        Description: req.body.Description
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },
  getCustomer: async (req, res) => {
    const user = req.params;
    try {
      const data = await Customer.findById(user.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const customers = await Customer.find({ companyId: id });
      if (!customers || customers.length === 0) {
        return res.status(404).json({ message: 'No customers found.' });
      }
      const count = customers[0].customers.length;
      res.status(200).json({ message: 'Total number of customers', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  }
  
}