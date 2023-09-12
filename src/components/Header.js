import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "../data/SidebarData";

export const Header = () => {


    const getDay = () => {
        const days = ['niedziela','poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    
        const d = new Date();
        return days[d.getDay()];
    }
    
    const getDate = () => {
    
        const d = new Date();
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        const month = d.getMonth() < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1;
    
        return day + '.' + month + '.' + d.getFullYear();
    }

    const[sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <div className="header">
            <div className="header-left">
                <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navabr-toggle">
                    <Link to='#' className="menu-bars close-menu">
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
                <div>
                    <Link className="home-link" to='/' >
                        <h1 className="app-name">WeatherAPP</h1>
                    </Link>
                    <p className="date">Dzisiaj jest {getDay()}, {getDate()}.</p> 
                </div>
            </div>
        </div>
    )
}