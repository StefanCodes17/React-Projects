import React from 'react'

import './Infobar.css'
export default function Infobar({ room }) {
    return (
        <div className="infobar__container">
            <h3>{room}</h3>
        </div>
    )
}
