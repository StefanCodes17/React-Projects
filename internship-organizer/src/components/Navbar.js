import { render } from '@testing-library/react'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.svg'
import FormModal from './FormModal'

import './Navbar.css'

export default function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const renderProfile = () => {
        return loggedIn ?
            <div>
                <button>Got to internships!</button>
            </div>
            :
            <div>
                <button className="nav__signup__btn" onClick={() => setModalOpen(true)}>Sign up!</button>
            </div >
    }

    const renderModal = () => {
        return <FormModal hasBeenOpen={modalOpen} />
    }

    return (
        <div className="navbar">
            <div className="nav__logo__container">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo"></img>
                </Link>
            </div>
            <div className="navbar__profile">
                {renderProfile()}
            </div>
            {modalOpen && renderModal()}
        </div>
    )
}
