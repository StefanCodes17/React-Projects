import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import { useHistory } from 'react-router-dom'

import Message from '../components/Message'

export default function Chat({ socket }) {
    const history = useHistory();
    const [msgs, setMsgs] = useState([])
    const ctx = useContext(UserContext)
    const [textMsg, setTextMsg] = useState('')

    const handleText = (e) => {
        setTextMsg(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('sendMsg', { user: ctx.user, textMsg })
        setTextMsg('')
    }


    useEffect(() => {
        if (ctx.user.id === '') {
            history.push('/')
            return;
        }
        socket.on('hi', (data) => {
            console.log(data)
        })
        //socket.emit('chatConnect', ctx.user)
        //socket.on('initialMsg', (data) => {
        // console.log(data)
        // setMsgs(data)
        //})
    }, [])
    return (
        <div>
            <ul>
                {msgs.map(msg => {
                    return <Message user={msg.user.name} key="msg" message={msg.text}></Message>
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input value={textMsg} type="text" name="message" onChange={handleText}></input>
                <button type="submit">Enter message</button>
            </form>
        </div >
    )
}
