import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../UserContext'

import Logo from '../components/Logo'
import './Home.css'

export default function Home({ socket }) {
    const history = useHistory()
    const [response, setResponse] = useState("");
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [errors, setErrors] = useState([])
    let ctx = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = { name: name, room: room, id: socket.id }
        socket.emit('joinRoom', user)
        socket.on('user', (data) => {
            setErrors(data.errors)
            if (data.errors.length == 0) {
                ctx.setUser(user)
                history.push(`/chat`)
            }
        });
    }

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        }
        if (e.target.name === "room") {
            let re = /[a-zA-Z]+/g
            let code = e.target.value.toUpperCase().match(new RegExp(re))
            if (code === null) {
                code = ['']
            }
            let output = code.join('')
            setRoom(output)
        }
    }

    return (
        <div className="main__page">
            <header>
                <div className="header__logo">
                    <Logo />
                </div>
            </header>
            <div className="main__form">
                <form onSubmit={handleSubmit}>
                    <h1>Join a chat room!</h1>
                    <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleChange} ></input>
                    <input type="text" name="room" placeholder="Enter room code" value={room} onChange={handleChange} maxLength="6"></input>
                    <button type="submit">Join room</button>
                </form>
                <div className='errors'>
                    {errors.map(error => {
                        return <li className="error">{error}</li>
                    })}
                </div>
            </div>
        </div>
    )
}
