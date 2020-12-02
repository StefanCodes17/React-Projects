const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const env = require('dotenv').config()

const app = express()
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

const router = require('./routes/router')
app.use(router)

const { addUser, removeUser, getUser, getUserInRoom } = require('./middleware/users')
io.on('connection', (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room })

        if (error) callback(error)
        socket.emit('message', { user: 'admin', text: `Welcome to ${user.room}, ${user.name} ` })
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.room} has joined!` })

        socket.join(user.room)
        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message })
        callback()
    })

    socket.on('disconnect', () => {
        console.log(`${socket.id} has disconnected`)
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})