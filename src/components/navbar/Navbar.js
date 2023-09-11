import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "./SidebarData";
import './Navbar.css';

export const Navbar = () => {

    const[sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navabr-toggle">
                    <Link to='#' className="menu-bars">
                        <AiIcons.AiOutlineCloseCircle onClick={showSidebar} />   
                    </Link>
                </li>
                {SidebarData.map((el, i) => {
                    return(
                        <li key={i} className={el.cName}>
                            <Link to={el.path}>
                                {el.icon}
                                <span>&nbsp;{el.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}