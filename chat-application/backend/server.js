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
            socket.emit('hi', 'hi')
            socket.join(user.room)
            socket.to(user.room).emit('hi', 'I have joined')
            //addMessageToRoom(user, `${user.name} has joined the lobby`)
            //let msgs = getMessagesFromRoom(user.room)
        }
    })
    //socket.on('chatConnect', (user) => {
    //let msgs = getMessagesFromRoom(user.room)
    // console.log(msgs)
    // socket.to(user.room).emit('initialMsg', msgs)
    //});
    //socket.on('sendMsg', ({ user, textMsg }) => {
    //addMessageToRoom(user, textMsg)
    // let msgs = getMessagesFromRoom(user.room)
    // console.log(msgs)
    //socket.to(user.room).emit('msg', msgs)
    //})
    socket.on('disconnect', () => {
        console.log('disconnecting')
        //let dUser = getUser(socket.id)
        //dUser && addMessageToRoom(dUser, `${dUser.name} has disconnected`)
        // let msgs = dUser && getMessagesFromRoom(dUser.room)
        //dUser && socket.to(dUser.room).emit('msg', msgs)
    })
})

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})