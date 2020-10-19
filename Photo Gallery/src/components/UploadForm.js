import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

export default function UploadForm() {

    const [file, setFile] = useState(null);
    const [err, setErr] = useState('')

    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']
    const submitFileHandler = (e) => {
        const selectedImg = e.target.files[0]
        if (selectedImg && fileTypes.includes(selectedImg.type)) {
            setFile(selectedImg);
            setErr('');
        } else {
            setFile(null);
            setErr('Select a valid file type (.png, .jpeg, .jpg)')
        }
    }

    return (
        <form>
            <label>
                +<input onChange={submitFileHandler} type="file" />
            </label>
            <div className="output">
                {err && <div className="error">{err}</div>}
                {file && <div className="">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
