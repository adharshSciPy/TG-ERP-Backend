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
    try {
      const user = await Appointment.findByIdAndDelete(req.params.id);
      if (!user) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateAppointment: async (req, res) => {
    try {
      await Appointment.findByIdAndUpdate(req.params.id, {
        ScheduleCall: req.body.ScheduleCall,
        ScheduleMeeting: req.body.ScheduleMeeting,
        Subject: req.body.Subject,
        Description: req.body.Description,
        StartDate: req.body.StartDate
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
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
  }
}