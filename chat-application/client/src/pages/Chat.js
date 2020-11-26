import React, { useState, useEffect } from 'react'

export default function Chat({ socket }) {
    const [msgs, setMsgs] = useState([])

    useEffect(() => {
        socket.on('msg', (data) => {
            console.log(data)
            setMsgs([...msgs, data])
        })
        return () => {
            setMsgs([])
        }
    }, [])
    return (
        <div>
            <ul>
                {msgs.map(msg => {
                    return <li key="msg">{msg}</li>
                })}
            </ul>
        </div>
    )
}
