const express = require('express')
const dotenv = require('dotenv')
const connect = require('./mongodb/config.js');
const socket = require('socket.io');
const cors = require("cors");
const notificationRoute = require('./routes/notificationRoute.js')


dotenv.config()

const app = express()
const PORT = process.env.PORT
// mongoose connection
connect();

// route
app.use("/notification", notificationRoute);

// initialising server instance
const server = app.listen(PORT, () => {
    console.log(`Server listening on port => ${PORT}`)
})

// connecting server instance with socket 
const io = socket(server, {
    cors: {
        origin: ['http://localhost:3000', 'http://localhost:5001'],
        credentials: true
    }
})

// Create a map to store online users and their corresponding sockets
const onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log("A client connected:", socket.id);

    // Event: User joins and sends their ID
    socket.on("join", (userId) => {
        console.log("User joined:", userId);
        onlineUsers.set(userId, socket.id);
    });

    // Event: User disconnects
    socket.on("disconnect", () => {
        console.log("A client disconnected:", socket.id);

        // Remove the user from onlineUsers when they disconnect
        for (const [userId, socketId] of onlineUsers.entries()) {
            if (socketId === socket.id) {
                onlineUsers.delete(userId);
                break;
            }
        }
    });
})