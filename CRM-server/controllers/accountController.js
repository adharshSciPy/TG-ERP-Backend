const Account = require('../model/accountSchema');
module.exports = {

  createAccountCollection: async (req, res) => {
    const data = new Account({
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
  createAccount: async (req, res) => {
    const data = new Account({
      accounts: {
        CreateAccount: req.body.CreateAccount,
        AccountName: req.body.AccountName,
        Phone: req.body.Phone,
        Description: req.body.Description,
        Supplier: req.body.Supplier,
        Website: req.body.Website
      }
    });
    Account.findByIdAndUpdate(req.params.id, { $push: { accounts: data.accounts } })
      .then(() => {
        res.send(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError");
      });
  },

  accountDetails: async (req, res) => {
    try {
      const account = await Account.find();
      res.json(account);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const account = await Account.findByIdAndDelete(req.params.id);
      if (!account) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateAccount: async (req, res) => {
    try {
      await Account.findByIdAndUpdate(req.params.id, {
        CreateAccount: req.body.CreateAccount,
        AccountName: req.body.AccountName,
        Phone: req.body.Phone,
        Description: req.body.Description,
        Supplier: req.body.Supplier,
        Website: req.body.Website,
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  getAccount: async (req, res) => {
    const account = req.params;
    try {
      const data = await Account.findById(account.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const accounts = await Account.find({ companyId: id });
      if (!accounts || accounts.length === 0) {
        return res.status(404).json({ message: 'No accounts found.' });
      }
      const count = accounts[0].accounts.length;
      res.status(200).json({ message: 'Total number of accounts', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  },
  getAccountById: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.AccountID;
    try {
      const data = await Account.findById(collection);

      const Accountdetails = data.accounts.find(x => x._id == id)
      res.status(200).json(Accountdetails);
    } catch (error) {
      console.log(error.message);
    }
  },
}