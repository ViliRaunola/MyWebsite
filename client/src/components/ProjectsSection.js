import React from 'react'
import './ProjectsSection.css'
import Popup from './Popup'
import { useState, useEffect} from 'react'
import pythonLogo from '../images/Python-Symbol.png'
import CardItem from './CardItem'

function Section({reference}) {
    const [buttonPopup, setButtonPopup] = useState(false);

 

    return (
        <div ref={reference} className='projects-section'>
            <h1 >My Projects</h1>
            <p>Here are some of my school/ personal projects during my time university</p>
            <div className='projects-container'>
                <CardItem 
                src={pythonLogo}
                text='Shortest path between two Wikipedia links'
                label='Wikipedia'
                setButtonPopup={setButtonPopup}
                />

                <CardItem 
                src={pythonLogo}
                text='Shortest path between two Wikipedia links'
                label='Wikipedia'
                setButtonPopup={setButtonPopup}
                />
                    
                {/* <div className='project-small-view' onClick={ () => setButtonPopup(true)}>
                    <img src={pythonLogo} alt='Python Logo' className='logo-image'/>
                    <h4>Shortest path between Wikipedia links</h4>
                </div> */}
              
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>My popup</h2>
            </Popup>
        </div>
    )
}

export default Section