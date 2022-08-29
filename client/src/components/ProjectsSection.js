import React from 'react'
import './ProjectsSection.css'
import Popup from './Popup'
import { useState, useEffect} from 'react'

function Section({reference}) {
    const [buttonPopup, setButtonPopup] = useState(false);

 

    return (
        <div ref={reference} className='projects-section'>
            <h1>My Projects</h1>
            <button onClick={ () => setButtonPopup(true)}>Popup</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>My popup</h2>
            </Popup>
        </div>
    )
}

export default Section