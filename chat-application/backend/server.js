const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = 5000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const { validateUser, addMessageToRoom, getMessagesFromRoom, getUser } = require('./middleware/validate')
io.on('connection', (socket) => {
    console.log('Connected')
    socket.on('joinRoom', (data) => {
        const { errors, user } = validateUser(data)
        socket.emit('user', { errors, user })
        if (user) {
            //MESSAGES HAVE TO INCLUDE USER ... ANYTHING ELSE ADMIN
            socket.join(user.room)
            addMessageToRoom(user.room, `${user.name} has joined the lobby`)
            let msgs = getMessagesFromRoom(user.room)
            socket.to(user.room).emit('msg', msgs)
        }
    })
    socket.on('disconnect', () => {
        let dUser = getUser(socket.id)
        dUser && addMessageToRoom(dUser.room, `${dUser.name} has disconnected`)
        let msgs = dUser && getMessagesFromRoom(dUser.room)
        dUser && socket.to(dUser.room).emit('msg', msgs)
    })
})

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})