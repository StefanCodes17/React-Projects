import React, { useState } from 'react'

import OrganizerSVG from '../assets/organizerSVG.svg'
import Logo from '../assets/Logo.svg'

import { Link } from 'react-router-dom'
import './UserForm.css'


const labels = {
    'login': {
        'primary_text': 'Welcome back!',
        'secondary_text': 'Hope you land that position!',
        'form__text': 'Login',
        'button': 'Go to Organizer',
        'fields': ['Email', 'Password'],
        'changer': "Don't have an account?",
        'changer__btn': 'Sign up'
    },
    'signup': {
        'primary_text': 'Welcome!',
        'secondary_text': 'Hope you organize to the fullest!',
        'form__text': 'Sign Up!',
        'button': 'Sign Up!',
        'fields': ['Name', 'Password', 'Email', 'Confirm Password'],
        'changer': "Already have an account?",
        'changer__btn': 'Log in!'
    }
}

const changer = ['signup', 'login']


export default function UserForm() {

    const [type, setType] = useState('login') //The type of userform consists of login, signup, newsletter

    return (
        <div className="form__container">
            <div className="side__info__container">
                <div className="side__text">
                    <h1>{labels[type].primary_text}</h1>
                    <h3>{labels[type].secondary_text}</h3>
                    <div className="btn__container"><Link to="/"><button className="side__info__button">Go Home</button></Link></div>
                    <div className="side__info__divider"></div>
                </div>
                <div className="side__info__svg">
                    <img className="organizer__svg" src={OrganizerSVG} alt="organizerSVG"></img>
                </div>
            </div>
            <div className="inner__form__container">
                <div className="form__header__text">
                    <img className="form__logo" src={Logo} alt="Internship Organizer" />
                    <h1>{labels[type].form__text}</h1>
                </div>
                <form className="user__form" id="user__form" action="submit" >
                    {labels[type].fields.map(field => {
                        return (
                            <input className="form__input" type="text" placeholder={field} key={field}></input>
                        )
                    })}
                </form>
                <button className="form__btn">{labels[type].button}</button>
                <div className="already__acc">
                    <p>{labels[type].changer} <span onClick={() => setType(changer[(changer.indexOf(type) + 1) % 2])}>{labels[type].changer__btn}</span></p>
                </div>
            </div>
        </div>
    )
}
