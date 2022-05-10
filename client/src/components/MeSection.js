import React from 'react'
import './MeSection.css'

function Section({reference}) {
  return (
    <div ref={reference} className='mesection' >
        <h3>I'm Vili Raunola</h3>
    </div>
  )
}

export default Section