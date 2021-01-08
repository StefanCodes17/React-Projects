import React from 'react'

import Card from '../components/Card'

import './Organizer.css'

export default function Organizer() {
    return (
        <div className="organizer__container">
            <div className="card__outer__container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
