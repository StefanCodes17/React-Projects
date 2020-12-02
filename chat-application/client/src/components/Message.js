import React from 'react'

import './Message.css'
export default function Message({ user, message }) {
    return (
        <div className="outer__container">
            <div className="user">{user}</div>
            <div className="text">{message}</div>
        </div>
    )
}
