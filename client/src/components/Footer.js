import React from 'react'
import './Footer.css'

function Footer({handelScroll, meRef, projectsRef, contactRef}) {
  return (
    <div className='footer'>
        <ul style={{margin: 0, paddingTop: '1em', color: '#f1faee'}}>
            <li onClick={() => handelScroll(meRef)} className='linkFooter'>Me</li>
            <li onClick={() => handelScroll(projectsRef)} className='linkFooter'>My projects</li>
            <li onClick={() => handelScroll(contactRef)} className='linkFooter'>Contact Me</li>
        </ul>   
        <p className='textFooter' >@ Vili Raunola</p>
    </div>
  )
}

export default Footer