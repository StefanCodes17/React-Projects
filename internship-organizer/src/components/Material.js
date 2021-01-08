import React, { useState } from 'react'

import './Material.css'

export default function Material({ text }) {

    const [checked, setChecked] = useState(false)

    return (
        <div className="material__container" onClick={() => setChecked(!checked)}>
            <div className={(checked ? 'checked' : 'notChecked') + ` statusBubble`}></div>
            <li>{text}</li>
        </div >
    )
}
