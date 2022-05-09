import React from 'react'
import './Section.css'

function Section({title, color, reference}) {
  return (
    <div ref={reference} className='section' style={{backgroundColor: color}}>
        <h3>{title}</h3>
    </div>
  )
}

export default Section