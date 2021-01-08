import React, { useState } from 'react'

import Material from './Material'

import './Card.css'

export default function Card() {
    const [status, setStatus] = useState('pending')
    const [category, setCategory] = useState('Tech')
    const [company, setCompany] = useState('Microsoft')
    const [position, setPosition] = useState('Software Engineer')
    const [startDate, setStartDate] = useState('December 15, 2020')
    const [endDate, setEndDate] = useState('December 15, 2020')
    const [stipend, setStipend] = useState('$6,0000')
    const [requiredMaterials, setRequiredMaterials] = useState(['Resume', 'Proof of citizenship'])

    return (
        <div className="card__container">
            <div className={`card__side__strip ${status}`}></div>
            <div className="card__application__container">
                <div className="card__category">{category}</div>
                <div className="card__company__position">
                    <div className="company">
                        <h3>{company}</h3>
                        <div className={`card__status ${status + '-text'}`}>
                            <h4>{status[0].toUpperCase() + status.substring(1)}</h4>
                        </div>
                    </div>
                    <h3 className="card__position">{position}</h3>
                </div>
                <div className="card__application__info">
                    <div className="application__open">
                        <h3>Application opens: {startDate}</h3>
                    </div>
                    <div className="application__closed">
                        <h3>Application closes: {endDate}</h3>
                    </div>
                </div>
                <div className="application__stipend">
                    <h3>Stipend: {stipend}</h3>
                </div>
                <div className="application__required__materials">
                    Required materials:
                    <ul className="materials">
                        {requiredMaterials.map(material => (
                            <Material className="material" text={material}></Material>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
