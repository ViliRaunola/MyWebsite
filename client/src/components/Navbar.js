import React from 'react'
import './Navbar.css'

function Navbar({handelScroll, meRef, projectsRef, contactRef}) {
  return (
    <div className='navbar'>
        <ul style={{margin: 0, paddingTop: '1em', color: '#f1faee'}}>
            <li onClick={() => handelScroll(meRef)} className='link'>Me</li>
            <li onClick={() => handelScroll(projectsRef)} className='link'>My projects</li>
            <li onClick={() => handelScroll(contactRef)} className='link'>Contact Me</li>
        </ul>   
    </div>
  )
}

export default Navbar