import React from 'react'
import './ProjectsSection.css'
import { useState} from 'react'
import pythonLogo from '../images/Python-Symbol.png'
import reactLogo from '../images/React-icon.svg.png'
import meanLogo from '../images/Mean+Stack.png'
import mernLogo from '../images/MERN-logo.png'
import cLogo from '../images/C_Logo.png'
import dataintensiveLogo from '../images/3044854.png'
import ProjectCard from './ProjectCard'


function ProjectSection({reference}) {
    const [isWikipediaOpen, setIsWikipediaOpen] = useState(false);
    const [isDataintensiveOpen, setIsDataIntensiveOpen] = useState(false);
    const [isReactOpen, setIsReactOpen] = useState(false);
    const [isKandiOpen, setIsKandiOpen] = useState(false);
    const [isMeanOpen, setIsMeanOpen] = useState(false);
    const [isCOpen, setIsCOpen] = useState(false);

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
                src={dataintensiveLogo}
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
                text='Detecting nearby Wlan and Bluetooth devices using Raspberry Pi'
                label="Bachelor's theses"
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsKandiOpen}
                isOpen={isKandiOpen}
                />  

                <ProjectCard 
                src={mernLogo}
                text='Web page that allows users to create, comment and vote on posts'
                label='Forum web page'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsReactOpen}
                isOpen={isReactOpen}
                />  

                <ProjectCard 
                src={meanLogo}
                text='Web page for sending private message between users'
                label='Message web page'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsMeanOpen}
                isOpen={isMeanOpen}
                />  

                <ProjectCard 
                src={cLogo}
                text='Joku terminaali baso'
                label='Message web page'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aut distinctio ducimus saepe iure mollitia 
                facilis consectetur quae et corporis voluptate.'
                setIsOpen={setIsCOpen}
                isOpen={isCOpen}
                /> 
        
            </div>
        </div>
    )
}

export default ProjectSection