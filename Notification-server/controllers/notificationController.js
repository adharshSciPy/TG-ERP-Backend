const Notification = require('../models/notificationSchema');
module.exports = {

    // post notifications
    postNotification: async (req, res) => {
        const id = req.params.id
        const { SenderId, Message } = req.body
        const data = new Notification({
            SenderId,
            RecipientId: id,
            Message
        });
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
            console.log("Notification Saved");
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },


    // get all notifications according to user
    getNotification: async (req, res) => {
        const id = req.params.id
        try {
            const Notifications = Notification.find({ RecipientId: id })
            if (!Notifications || Notifications.length === 0) {
                res.status(401).json({ message: 'Notification fetching failed' })
            }
            else {
                res.status()
            }
        }
        catch (err) {
            res.status(500).json({ error: 'Server Error' })
        }
    }
}