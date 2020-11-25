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
io.on('connection', (socket) => {
    console.log('Connected')
    socket.on('createRoom', (data) => {
        const { errors, name } = validateUser(data)
        console.log(errors, name)
    })
    socket.on('joinRoom', (data) => {
        console.log('Joining room')
    })
})

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})