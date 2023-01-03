import React from 'react'
import './ProjectsSection.css'
import { useState} from 'react'
import pythonLogo from '../images/Python-Symbol.png'
import reactLogo from '../images/React-icon.svg.png'
import meanLogo from '../images/Mean+Stack.png'
import mernLogo from '../images/MERN-logo.png'
import cLogo from '../images/C_Logo.png'
import dataintensiveLogo from '../images/3044854.png'
import androidLogo from '../images/android.png'
import ProjectCard from './ProjectCard'


function ProjectSection({reference}) {
    const [isWikipediaOpen, setIsWikipediaOpen] = useState(false);
    const [isDataintensiveOpen, setIsDataIntensiveOpen] = useState(false);
    const [isReactOpen, setIsReactOpen] = useState(false);
    const [isKandiOpen, setIsKandiOpen] = useState(false);
    const [isMeanOpen, setIsMeanOpen] = useState(false);
    const [isCOpen, setIsCOpen] = useState(false);
    const [isMyPageOpen, setIsMyPageOpen] = useState(false);
    const [isAndroidOpen, setIsAndroidOpen] = useState(false);

    return (
        <div ref={reference} className='projects-section'>
            <h1>My Projects</h1>
            <p>Here are some of my school/ personal projects during my time university</p>
            <div className='projects-container'>

                <ProjectCard 
                src={pythonLogo}
                text='Shortest path between two Wikipedia links'
                label='Wikipedia'
                description='A client-server service that allows the user the find the shortest path between two Wikipedia pages. 
                The service uses Wikipedia API to fetch the links on each page. 
                The server has the option to select the number of worker threads to experiment with the search process. '
                setIsOpen={setIsWikipediaOpen}
                isOpen={isWikipediaOpen}
                repository='https://github.com/ViliRaunola/DistributedFinalProject'
                />

                <ProjectCard 
                src={dataintensiveLogo}
                text='Web store utilizing a distributed database'
                label='Distributed database'
                description="A web store that was done using SERN-stack. 
                The web store's database is designed to be country spesific. 
                This means that each supported county has their own selection but the user profiles are shared between the countries. "
                setIsOpen={setIsDataIntensiveOpen}
                isOpen={isDataintensiveOpen}
                repository='https://github.com/AlmondRumble11/DataIntensiveProjectApp'
                />

                <ProjectCard 
                src={pythonLogo}
                text='Detecting nearby Wlan and Bluetooth devices using Raspberry Pi'
                label="Bachelor's theses"
                description="This project was done as a bachelor's thesis.
                It uses Raspberry Pi to detect closeby WLAN and Bluetooth signals and identifies the devices using their MAC-address. 
                The data from the discovered devices can be stored locally to the Raspberry or to be sent to a Mongo database in the web.
                A visualisation web site was also done that uses the Mongo database to display the data in a user friendly matter."
                setIsOpen={setIsKandiOpen}
                isOpen={isKandiOpen}
                repository='https://github.com/ViliRaunola/Kandi-Raspberry'
                />  

                <ProjectCard 
                src={mernLogo}
                text='Web page that allows users to create, comment and vote on posts'
                label='Forum web page'
                description="A web page done using the MERN-stack. Users can register to the site. 
                After registration users can vote, comment and create their own posts. 
                The front-end uses the MUI library for the components such as the navbar. 
                More detailed documentation can be found in the repository."
                setIsOpen={setIsReactOpen}
                isOpen={isReactOpen}
                repository='https://github.com/ViliRaunola/ProjectWebApp'
                />  

                <ProjectCard 
                src={meanLogo}
                text='Web page for sending private message between users'
                label='Message web page'
                description='A messaging web site done using the MEAN-stack. 
                Registered users can take part in a global chat or send private messages to other users. 
                A demonstration video of the site is included in the repository.'
                setIsOpen={setIsMeanOpen}
                isOpen={isMeanOpen}
                repository='https://bitbucket.org/ViliVilperi/exercises/src/main/myproject/'
                />  

                <ProjectCard 
                src={cLogo}
                text='Joku terminaali baso'
                label='Message web page'
                description=''
                setIsOpen={setIsCOpen}
                isOpen={isCOpen}
                /> 

                <ProjectCard 
                src={reactLogo}
                text='Home web page'
                label='Home web page'
                description=''
                setIsOpen={setIsMyPageOpen}
                isOpen={isMyPageOpen}
                /> 

                <ProjectCard 
                src={androidLogo}
                text='Restaurant review application'
                label='Android application'
                description=''
                setIsOpen={setIsAndroidOpen}
                isOpen={isAndroidOpen}
                /> 
        
            </div>
        </div>
    )
}

export default ProjectSection