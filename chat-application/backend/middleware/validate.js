const rooms = []
const users = []

const validateUser = ({ name, roomCode }) => {
    let errors = []
    userName = name.toLowerCase().trim()
    if (userName.length == 0) errors.push('Name cannot be empty')
    users.map(user => {
        if (user.name == userName) {
            errors.push('User already exists')
        }
    })
    if (errors.length == 0) {
        const { res, roomExists } = validateRoom(roomCode)
        if (res && res.length == 0) {
            users.push({ name: userName, roomExists })
        } else {
            errors = [...errors, res]
        }
    }
    console.log(users)
    return { errors, name }
}

const validateRoom = (room) => {
    const res = []
    code = room.trim().toUpperCase()
    if (code.length == 0) res.push('Code cannot be empty')
    if (code.length > 6) res.push('Code cannot be longer than 6 characters')
    const roomExists = rooms.filter((room) => room == code)
    return res, roomExists
}

module.exports = { validateUser }
