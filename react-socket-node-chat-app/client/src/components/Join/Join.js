import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'
export default function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [error, setError] = useState('')

    const checkFields = (e) => {
        if (!name || !room) {
            e.preventDefault()
            setError('Fields may not be empty')
        }
    }

    return (
        <div className="join__outer__container">
            <div className="join__inner__container">
                <form>
                    <input type="text" name="name" placeholder="Enter a name" value={name} onChange={(e) => { setName(e.target.value); setError('') }}></input>
                    <input type="text" name="room" placeholder="Enter a room" value={room} onChange={(e) => { setRoom(e.target.value); setError('') }}></input>
                    <Link onClick={checkFields} to={`/chat/?name=${name}&room=${room}`}>
                        <button className="button" type="submit">Join</button>
                    </Link>
                </form>
                <div className="join__errors">
                    <ul>
                        {error && <li>{error}</li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}
