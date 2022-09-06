import React from 'react'
import {motion} from 'framer-motion'
import './ProjectsSection.css'

// onClick={ () => props.setButtonPopup(true)}

function CardItem(props) {
  return (
    <>
        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0 0.5)'}} layout className="card-project" onClick={ () => (props.setIsOpen(!props.isOpen)) (props.setOther(false))}>
            <motion.img layout src={props.src} className='logo-image'></motion.img>

            <motion.h5 layout="position">{props.text}</motion.h5>
            
            {props.isOpen && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className='card-expand'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut distinctio ducimus saepe iure mollitia facilis consectetur quae et corporis voluptate.</p>

            </motion.div>
            )}

        </motion.div>
        
    </>
  )
}

export default CardItem