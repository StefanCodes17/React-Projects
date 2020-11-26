import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

import Logo from '../components/Logo'
import './Home.css'

export default function Home({ socket }) {
    const history = useHistory()
    const [response, setResponse] = useState("");
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('joinRoom', { name: name, roomCode: room })
        history.push('/chat')
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

    useEffect(() => {
        socket.on('user', (data) => {
            setErrors(data.errors)
        });
    }, []);

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
