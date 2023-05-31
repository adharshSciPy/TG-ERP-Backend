const Employee = require("../models/employeeSchema");
module.exports = {

  // post
  createEmployeeCollection: async (req, res) => {
    const data = new Employee({
      companyId: req.body.companyId,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added")
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  addEmployee: async (req, res) => {
    const data = new Employee({
      employees: {
        EmpCode: req.body.EmpCode,
        Name: req.body.Name,
        DOB: req.body.DOB,
        Phone: req.body.Phone,
        Address: req.body.Address,
        Department: req.body.Department,
        Designation: req.body.Designation,

        // Bank Acoount

        BankAccNo: req.body.BankAccNo,
        BankAccName: req.body.BankAccName,
        BankBranch: req.body.BankBranch,
        BankIFSCCode: req.body.BankIFSCCode,

        // -------------------- //

        PFNo: req.body.PFNo,
        ESI: req.body.ESI,
        UAN: req.body.UAN,

        // Working Time

        From: req.body.From,
        To: req.body.To,

        // -------------------- //

        Email: req.body.Email,
        Password: req.body.Password,
        Role: req.body.Role
      }
    });
    Employee.findByIdAndUpdate(req.params.id, { $push: { employees: data.employees } })
      .then(() => {
        res.status(200).json("Successfully Uploaded");
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError");
      });
  },

  //get

  employeeDetails: async (req, res) => {
    try {
      const employee = await Employee.find();
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteEmployee: async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (!employee) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editEmployee: async (req, res) => {
    try {
      await Employee.findByIdAndUpdate(req.params.id, {
        EmpCode: req.body.EmpCode,
        Name: req.body.Name,
        DOB: req.body.DOB,
        Phone: req.body.Phone,
        Address: req.body.Address,
        Department: req.body.Department,
        Designation: req.body.Designation,

        // Bank Acoount

        BankAccNo: req.body.BankAccNo,
        BankAccName: req.body.BankAccName,
        BankBranch: req.body.BankBranch,
        BankIFSCCode: req.body.BankIFSCCode,

        // -------------------- //

        PFNo: req.body.PFNo,
        ESI: req.body.ESI,
        UAN: req.body.UAN,

        // Working Time

        From: req.body.From,
        To: req.body.To,

        //-------------------- //

        Email: req.body.Email,
        Password: req.body.Password,
        Role: req.body.Role

      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },


  // get by id

  getEmployee: async (req, res) => {
    const employee = req.params;
    try {
      const data = await Employee.findById(employee.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}