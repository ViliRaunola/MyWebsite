import React from 'react'
import pythonLogo from '../images/Python-Symbol.png'
import './ProjectsSection.css'

function CardItem(props) {
  return (
    <>
        <div className="project-small-view" onClick={ () => props.setButtonPopup(true)}>
            <img src={props.src} className='logo-image'></img>
            <h5 className='cards-item-text'>{props.text}</h5>
        </div>
        
    </>
  )
}

export default CardItem