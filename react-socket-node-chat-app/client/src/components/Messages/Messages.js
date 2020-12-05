import React from 'react'

import './Messages.css'
export default function Messages({ name, messages }) {
    console.log(name, messages)
    return (
        <div>
            <ul>
                {messages.map(message => {
                    let classTemp = "otherUser"
                    console.log(message.user, name)
                    if (message.user === name.trim().toLowerCase()) {
                        classTemp = "mineUser"
                    }
                    return <li className={classTemp}>{message.text}</li>
                })}
            </ul>
        </div>
    )
}
