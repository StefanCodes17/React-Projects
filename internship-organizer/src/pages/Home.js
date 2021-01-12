import React from 'react'

import { Link } from 'react-router-dom'

import dashedCircleInner from '../assets/dashedCircleInner.svg'
import dashedCircleInner2 from '../assets/dashedCircleInner2.svg'
import dashedCircleOuter from '../assets/dashedCircleOuter.svg'
import pinkSideBlrub from '../assets/pinkSideBlurb.svg'
import greenSideBlrub from '../assets/greenSideBlurb.svg'

import './Home.css'

export default function Home() {
    return (
        <div className="home__container">
            <div className="main__section__text">
                <h1 className="main__title">Track the Internship!</h1>
                <p className="main__paragraph">Ever had a hard time keeping track of start dates, end dates, required materials for an internship or job application?</p>
                <Link to="/user/signup"><button className="main__signup__btn">Sign up!</button></Link>
            </div>
            <img className="main__blurb1" src={pinkSideBlrub} alt="main__blurb"></img>
            <img className="main__blurb2" src={greenSideBlrub} alt="main__blurb"></img>
            <img className="dashedCircleI" src={dashedCircleInner} alt="dashedCircleI" />
            <img className="dashedCircleII" src={dashedCircleInner2} alt="dashedCircleII" />
            <img className="dashedCircleIII" src={dashedCircleOuter} alt="dashedCircleIII" />
            <div className="main__steps">
                <Step num='1' text='Signup to our free internship tracker,
and begin adding position you are looking
to apply for or have already applied!' color='green' />
                <Step num='2' text='Fill out the necessary information, including 
start dates, end dates, available stipends, links
to the website and more!' color='pink' />
                <Step num='3' text='Update the status regularaly! You will also
get emails and text messages reminding 
you of upcoming due dates.' color='orange' />
                <Step num='4' text="Lastly, nail that interview and get the position
you've worked so hard for. Update your status
and share your successes on our news forum!" color='green' />
            </div>
        </div>
    )
}

function Step({ num, text, color }) {

    const styles = {
        'green': '#43C48C',
        'pink': '#DF779A',
        'orange': '#EDA34F'
    }

    return (
        <div className="step">
            <div className="step__number" style={{ backgroundColor: styles[color] }}>{num}</div>
            <div className="step__text">{text}</div>
        </div>
    )
}
