import React from 'react'
import {motion} from 'framer-motion'
import './ProjectsSection.css'

// onClick={ () => props.setButtonPopup(true)}

function ProjectCard(props) {

  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  return (
    <>
        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0 0.5)'}} layout className="card-project" onClick={ () => (props.setIsOpen(!props.isOpen))}>
            <motion.img layout src={props.src} className='logo-image'></motion.img>

            <motion.h5 layout="position">{props.text}</motion.h5>
            
            {props.isOpen && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className='card-expand'>
              <p>{props.description}</p>
              <div className='links-div'>
                
                <a className='underline_link' onClick={(e) => handleLinkClick(e)} href={props.repository} target='_blank' rel="noreferrer">Source code</a>
                
                {props.demoVideoLink && (
                  <a style={{}} className='underline_link' onClick={(e) => handleLinkClick(e)} href={props.demoVideoLink} target='_blank' rel="noreferrer">Demonstration video</a>
                )}
              </div>
            </motion.div>
            )}

        </motion.div>
        
    </>
  )
}

export default ProjectCard