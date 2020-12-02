const rooms = []
const users = []

/* {name: 'Stefan', roomCode: 'THBYUH'} */
const validateUser = ({ name, room, id }) => {
    let errors = []
    let user;
    userName = name.toLowerCase().trim()
    if (userName.length == 0) errors.push('Name cannot be empty')
    users.map(user => {
        if (user.name == userName) {
            errors.push('User already exists')
        }
    })
    if (errors.length == 0) {
        const { res, roomExists } = validateRoom(userName, room)
        if (res && res.length == 0) {
            user = { name, room: roomExists, id }
            users.push({ name: userName, room: roomExists, id })
        } else {
            errors = [...errors, ...res]
        }
    }
    return { errors, user }
}

const validateRoom = (user, room) => {
    const res = []
    code = room.trim().toUpperCase()
    if (code.length == 0) res.push('Code cannot be empty')
    if (code.length > 6) res.push('Code cannot be longer than 6 characters')
    const roomExists = rooms.filter((room) => room == code)[0] || room
    addRoom(user, room)
    return { res, roomExists }
}

function addRoom(user, code) {
    if (rooms.length === 0) {
        rooms.push({ room: code, users: [user], messages: [] })
    } else {
        rooms.map(room => {
            if (room.room !== code) {
                let room = {
                    room: code,
                    users: [user],
                    messages: []
                }
                rooms.push(room)
            } else {
                room.users.push(user)
            }
        })
    }
}

function addMessageToRoom(user, message) {
    let code = user.room
    rooms.map(room => {
        if (room.room === code) {
            room.messages.push({ user, text: message })
        }
    })
}

function getMessagesFromRoom(code) {
    let msgs = []
    rooms.map(room => {
        if (room.room === code) {
            msgs = room.messages
        }
    })
    console.log(msgs)
    return msgs
}

function getUser(id) {
    let outputUser;
    users.map(user => {
        if (user.id === id) {
            outputUser = user
        }
    })
    return outputUser
}

module.exports = { validateUser, addMessageToRoom, getMessagesFromRoom, getUser }