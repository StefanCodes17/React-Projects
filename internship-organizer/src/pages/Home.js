import React from 'react'

import './Home.css'

import dashedCircleInner from '../assets/dashedCircleInner.svg'
import dashedCircleInner2 from '../assets/dashedCircleInner2.svg'
import dashedCircleOuter from '../assets/dashedCircleOuter.svg'
import pinkSideBlrub from '../assets/pinkSideBlurb.svg'
import greenSideBlrub from '../assets/greenSideBlurb.svg'

export default function Home() {
    return (
        <div className="home__container">
            <div className="main__section__text">
                <h1 className="main__title">Track the Internship!</h1>
                <p className="main__paragraph">Ever had a hard time keeping track of start dates, end dates, required materials for an internship or job application?</p>
                <button className="main__signup__btn">Sign up!</button>
            </div>
            <img className="main__blurb1" src={pinkSideBlrub}></img>
            <img className="main__blurb2" src={greenSideBlrub}></img>
            <img className="dashedCircleI" src={dashedCircleInner} alt="dashedCircleI" />
            <img className="dashedCircleII" src={dashedCircleInner2} alt="dashedCircleII" />
            <img className="dashedCircleIII" src={dashedCircleOuter} alt="dashedCircleIII" />
        </div>
    )
}
