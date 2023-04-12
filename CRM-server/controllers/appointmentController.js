const Appointment = require('../model/appointmentSchema');
module.exports = {
  createAppointment: async (req, res) => {
    const data = new Appointment({
      ScheduleCall: req.body.ScheduleCall,
      ScheduleMeeting: req.body.ScheduleMeeting,
      Subject: req.body.Subject,
      Description: req.body.Description,
      StartDate: req.body.StartDate
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
  }
}