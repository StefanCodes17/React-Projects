import React, { useState, useEffect } from 'react'

import OrganizerSVG from '../assets/organizerSVG.svg'
import Logo from '../assets/Logo.svg'

import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { validatePasswords } from '../hooks/validate'

import './UserForm.css'

export default function UserForm() {

    const [type, setType] = useState('login') //The type of userform consists of login, signup, newsletter
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConPassword] = useState('')
    const [errors, setErrors] = useState([])
    const { currentUser, signup } = useAuth()

    const labels = {
        'login': {
            'primary_text': 'Welcome back!',
            'secondary_text': 'Hope you land that position!',
            'form__text': 'Login',
            'button': 'Go to Organizer',
            'fields': ['Email', 'Password'],
            'changer': "Don't have an account?",
            'changer__btn': 'Sign up',
            'onChange': {
                'Email': setEmail,
                'Password': setPassword,
            }
        },
        'signup': {
            'primary_text': 'Welcome!',
            'secondary_text': 'Hope you organize to the fullest!',
            'form__text': 'Sign Up!',
            'button': 'Sign Up!',
            'fields': ['Name', 'Email', 'Password', 'Confirm Password'],
            'changer': "Already have an account?",
            'changer__btn': 'Log in!',
            'onChange': {
                'Name': setName,
                'Email': setEmail,
                'Password': setPassword,
                'Confirm Password': setConPassword
            }
        }
    }

    const changer = ['signup', 'login']

    const handleSubmit = (e) => {
        e.preventDefault()
        if (type == 'signup') {
            let { errors } = validatePasswords(password, conpassword)
            if (errors.length > 0) {
                setErrors(errors)
            } else {
                signup(email, password)
                    .catch(err => {
                        setErrors([...errors, err.message])
                    })
            }
        }
    }

    useEffect(() => {
        setErrors([])
    }, [name, email, password, conpassword])

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
                    <ul className="form__errors">
                        {errors &&
                            errors.map(error => {
                                return <li key={error}>{error}</li>
                            })}
                    </ul>
                </div>
                <form className="user__form" id="user__form" onSubmit={(e) => handleSubmit(e)} >
                    {labels[type].fields.map(field => {
                        return (
                            <input className="form__input" type={field === 'Password' || field === 'Confirm Password' ? "password" : "text"} placeholder={field} key={field} name={field.toLowerCase().replace(' ', '')} onChange={(e) => labels[type]['onChange'][field](e.target.value)} required></input>
                        )
                    })}
                    <button className="form__btn" type='submit'>{labels[type].button}</button>
                </form>
                <div className="already__acc">
                    <p>{labels[type].changer} <span onClick={() => setType(changer[(changer.indexOf(type) + 1) % 2])}>{labels[type].changer__btn}</span></p>
                </div>
            </div>
        </div >
    )
}
