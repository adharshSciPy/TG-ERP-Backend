const Appointment = require('../model/appointmentSchema');
module.exports = {
  createAppointmentCollection:async(req,res)=>{
    const data = new Appointment({
      companyId:req.body.companyId,
    });
    try{
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch(error){
      res.status(400).json({message:error.message})
    }
  },
  createAppointment: async (req, res) => {
    const data = new Appointment({
      appointments:{
      ScheduleCall: req.body.ScheduleCall,
      ScheduleMeeting: req.body.ScheduleMeeting,
      Subject: req.body.Subject,
      Description: req.body.Description,
      StartDate: req.body.StartDate
      }
    });
    Appointment.findByIdAndUpdate(req.params.id,{$push:{appointments:data.appointments}})
    .then(()=>{
      res.status(200).json("Successfully Uploaded");
    })
    .catch((err)=>{
      console.error('Failed to add address:',err);
      res.status(500).json("ServerError");
    });
  },
  appointmentDetails: async (req, res) => {
    try {
      const user = await Appointment.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteAppointment: async (req, res) => {
    const { companyID, appointmentID } = req.params;
    Appointment.findById(companyID, (err, object) => {
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

      const nestedIndex = object.appointments.findIndex(nestedObj => nestedObj.id === appointmentID);
      if (nestedIndex === -1) {
        return res.status(404).send('Nested object not found')
      }
      else {
        console.log(nestedIndex);
      }
      object.appointments.splice(nestedIndex, 1);
      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }
        res.send('Object removed successfully');
      });
    })
  },

  updateAppointment: async (req, res) => {
    const { companyID, appointmentID } = req.params;
    const updatedAppointmentData = req.body; // Assuming the updated data is sent in the request body

    Appointment.findById(companyID, (err, object) => {
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

      const nestedAppointment = object.appointments.find(nestedObj => nestedObj.id === appointmentID);
      console.log(nestedAppointment)

      if (!nestedAppointment) {
        return res.status(404).send('Nested object not found');
      }
      else {
        console.log(nestedAppointment,"here");
      }

      // Update the employee's data with the provided updatedCustomerData
      Object.assign(nestedAppointment,updatedAppointmentData);

      object.save((err) => {
        if (err) {
          console.error('Error saving object:', err);
          return res.status(500).send('Internal Server Error');
        }

        res.send('Object updated successfully');
      });
    });
  },
  getAppointment: async (req, res) => {
    const user = req.params;
    try {
      const data = await Appointment.findById(user.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const appointments = await Appointment.find({ companyId: id });
      if (!appointments || appointments.length === 0) {
        return res.status(404).json({ message: 'No appointments found.' });
      }
      const count = appointments[0].appointments.length;
      res.status(200).json({ message: 'Total number of appointments', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  },
  getAppointmentById: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.AppointmentID;
    try {
      const data = await Appointment.findById(collection);

      const Appointmentdetails = data.appointments.find(x => x._id == id)
      res.status(200).json(Appointmentdetails);
    } catch (error) {
      console.log(error.message);
    }
  },
}