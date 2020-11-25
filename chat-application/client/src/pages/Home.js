import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:5000'

export default function Home() {

    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('user', data => {
            setResponse(data);
        });
        socket.emit('createRoom', { name: 'Stefan', roomCode: 'TYBGHH' })
    }, []);

    return (
        <div>
            {response}
        </div>
    )
}
