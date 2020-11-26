import React, { useState, useEffect } from 'react'

export default function Chat({ socket }) {
    const [msgs, setMsgs] = useState([])

    useEffect(() => {
        socket.on('msg', (data) => {
            setMsgs(data)
        })
    }, [])
    return (
        <div>
            <ul>
                {msgs.map(msg => {
                    console.log(msg)
                    return <li key="msg">{msg}</li>
                })}
            </ul>
        </div>
    )
}
