import React from 'react'
import './ProjectsSection.css'

function Section({reference}) {
  return (
    <div ref={reference} className='projects-section'>
        <h1>My Projects</h1>
    </div>
  )
}

export default Section