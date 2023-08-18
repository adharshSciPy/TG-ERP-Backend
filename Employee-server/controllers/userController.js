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
    const CountData = await Employee.findById(req.params.id);
    const count = CountData.employees.length + 1
    const data = new Employee({
      employees: {
        UserId : req.body.UserId,
        firstName:  req.body.firstName,
        lastName: req.body. lastName,
        Email:req.body.Email,
        EmpCode: "ID00"+count,
        Name: req.body.Name,
        DOB: req.body.DOB,
        Phone: req.body.Phone,
        PAddress:  req.body.PAddress,
        PCity:req.body.PCity,
        PState:req.body.PState,
        PCountry:  req.body.PCountry,
        PPostalCode: req.body.PPostalCode,
        TAddress:  req.body.TAddress,
        TCity:req.body.TCity,
        TState:req.body.TState,
        TCountry:  req.body.TCountry,
        TPostalCode: req.body.TPostalCode,


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

  // deleteEmployee: async (req, res) => {
  //   try {
  //     const employee = await Employee.findByIdAndDelete(req.params.id);
  //     if (!employee) throw Error("No user found");
  //     res.status(200).json({ success: true });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },


  deleteEmployee: async (req, res) => {
      const { companyID, employeeID } = req.params;
  
      try {
          const object = await Employee.findById(companyID);
  
          if (!object) {
              return res.status(404).send('Object not found');
          }
  
          const nestedIndex = object.employees.findIndex(
              nestedObj => nestedObj.id === employeeID
          );
  
          if (nestedIndex === -1) {
              return res.status(404).send('Nested object not found');
          }
  
          object.employees.splice(nestedIndex, 1);
          await object.save();
  
          res.send('Object removed successfully');
      } catch (error) {
          console.error('Error deleting object:', error.message);
          return res.status(500).send('Internal Server Error');
      }
  },
  

  //put

  editEmployee: async (req, res) => {
      const { companyID, employeeID } = req.params;
      const updatedEmployeeData = req.body;
  
      try {
          const object = await Employee.findById(companyID);
  
          if (!object) {
              return res.status(404).send('Object not found');
          }
  
          const nestedEmployee = object.employees.find(
              nestedObj => nestedObj.id === employeeID
          );
  
          if (!nestedEmployee) {
              return res.status(404).send('Nested object not found');
          }
  
          // Update the employee's data with the provided updatedEmployeeData
          Object.assign(nestedEmployee, updatedEmployeeData);
  
          await object.save();
  
          res.send('Object updated successfully');
      } catch (error) {
          console.error('Error updating object:', error.message);
          return res.status(500).send('Internal Server Error');
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

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const employees = await Employee.find({ companyId: id });
      if (!employees || employees.length === 0) {
        return res.status(404).json({ message: 'No employees found.' });
      }
      const count = employees[0].employees.length;
      res.status(200).json({ message: 'Total number of employees', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  },
  getEmployeebyId: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.employeeID;
    try {
      const data = await Employee.findById(collection);

      const Employeedetails = data.employees.find(x => x._id == id)
      console.log(Employeedetails)
      res.status(200).json(Employeedetails);
    } catch (error) {
      console.log(error.message);
    }
  },

  getEmployeebyUserId: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.userID;
    try {
      const data = await Employee.findById(collection);

      const Employeedetails = data.employees.find(x => x.UserId == id)
      res.status(200).json(Employeedetails);
    } catch (error) {
      console.log(error.message);
    }
  },

}