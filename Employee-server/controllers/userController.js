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
    Employee.findById(companyID, (err, object) => {
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

      const nestedIndex = object.employees.findIndex(nestedObj => nestedObj.id === employeeID);
      if (nestedIndex === -1) {
        return res.status(404).send('Nested object not found')
      }
      else {
        console.log(nestedIndex);
      }
      object.employees.splice(nestedIndex, 1);
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

  editEmployee: async (req, res) => {
    const { companyID, employeeID } = req.params;
    const updatedEmployeeData = req.body; // Assuming the updated data is sent in the request body

    Employee.findById(companyID, (err, object) => {
      if (err) {
        console.error('Error finding object:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (!object) {
        return res.status(404).send('Object not found');
      }
      else {
        console.log("ok");
      }

      const nestedEmployee = object.employees.find(nestedObj => nestedObj.id === employeeID);
      console.log(nestedEmployee)

      if (!nestedEmployee) {
        return res.status(404).send('Nested object not found');
      }
      else {
        console.log(nestedEmployee,"here");
      }

      // Update the employee's data with the provided updatedCustomerData
      Object.assign(nestedEmployee,updatedEmployeeData);

      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }

        res.send('Object updated successfully');
      });
    });
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