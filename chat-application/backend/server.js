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

const { validateUser } = require('./middleware/validate')
io.on('connection', (socket, id) => {
    console.log('Connected')
    socket.on('joinRoom', (data) => {
        const { errors, user } = validateUser(data)
        socket.emit('user', { errors, user })
        if (user) {
            socket.join(user.room)
            socket.to(user.room).emit('msg', `${user.name} has joined the lobby`)
            io.to(id).emit('msg', `${user.name}, welcome to the lobby`)
        }
    })
})

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})