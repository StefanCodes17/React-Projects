import React, { useState } from 'react'

import Logo from '../assets/Logo.svg'

import './Navbar.css'

export default function () {

    const [loggedIn, setLoggedIn] = useState(false)

    const renderProfile = () => {
        return loggedIn ?
            <div>
                <button>Got to internships!</button>
            </div>
            :
            <div>
                <button className="nav__signup__btn">Sign up!</button>
            </div>
    }

    return (
        <div className="navbar">
            <div className="nav__logo__container">
                <img className="logo" src={Logo}></img>
            </div>
            <div className="navbar__profile">
                {renderProfile()}
            </div>
        </div>
    )
}