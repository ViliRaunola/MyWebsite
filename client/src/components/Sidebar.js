import React, {useState} from 'react'
import * as GitIcons from 'react-icons/go'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Sidebar.css'
import {IconContext} from 'react-icons'

function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar' onClick={showSidebar}>
                <Link to='#' className='menu-bars'>
                    <GitIcons.GoThreeBars></GitIcons.GoThreeBars>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-itmes' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <GitIcons.GoX></GitIcons.GoX>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar