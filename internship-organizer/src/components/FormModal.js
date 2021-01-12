import React, { useState } from 'react'


import './FormModal.css'

export default function FormModal({ hasBeenOpened }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [modalState, setModalState] = useState(!hasBeenOpened)


    return modalState && (
        <div className="modal__outer__container">
            <div className="modal__container">
                <div className="close__button" onClick={() => setModalState(false)}><h1>X</h1></div>
                <h2>Login in!</h2>
                <form action="submit" className="modal__form">
                    <input type="text" placeholder="Name" value={name} onChange={() => setName()} />
                    <input type="text" placeholder="Email" value={email} onChange={() => setEmail()} />
                    <button>Log in!</button>
                </form>
            </div>
        </div>
    )
}
