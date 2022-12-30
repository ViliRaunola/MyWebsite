import React from 'react'
import './ProjectsSection.css'
import Popup from './Popup'
import { useState} from 'react'
import pythonLogo from '../images/Python-Symbol.png'
import ProjectCard from './ProjectCard'

function ProjectSection({reference}) {
    const [isWikipediaOpen, setIsWikipediaOpen] = useState(false);
    const [isDataintensiveOpen, setIsDataIntensiveOpen] = useState(false);

 
    //TODO make the projects into an pbject from whitch to map them
    return (
        <div ref={reference} className='projects-section'>
            <h1>My Projects</h1>
            <p>Here are some of my school/ personal projects during my time university</p>
            <div className='projects-container'>
                <ProjectCard 
                src={pythonLogo}
                text='Shortest path between two Wikipedia links'
                label='Wikipedia'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsWikipediaOpen}
                isOpen={isWikipediaOpen}
                />

                <ProjectCard 
                src={pythonLogo}
                text='Book store using distributed databases'
                label='Distributed databases'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsDataIntensiveOpen}
                isOpen={isDataintensiveOpen}
                />

                <ProjectCard 
                src={pythonLogo}
                text='Book store using distributed databases'
                label='Distributed databases'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsDataIntensiveOpen}
                isOpen={isDataintensiveOpen}
                />  

                <ProjectCard 
                src={pythonLogo}
                text='Book store using distributed databases'
                label='Distributed databases'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsDataIntensiveOpen}
                isOpen={isDataintensiveOpen}
                />  

                {/* <div className='project-small-view' onClick={ () => setButtonPopup(true)}>
                    <img src={pythonLogo} alt='Python Logo' className='logo-image'/>
                    <h4>Shortest path between Wikipedia links</h4>
                </div> */}
              
            </div>

            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>My popup</h2>
            </Popup> */}
        </div>
    )
}

export default ProjectSection