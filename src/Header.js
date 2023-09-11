import React, { useRef } from "react";
import { Link } from "react-router-dom";

export const Header = ({setFromSearch}) => {

    const searchRef = useRef(null);

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

    const sendSearch = () => {
        setFromSearch(searchRef.current.value)
        searchRef.current.value = '';
    }

    return(
        <div className="header">
            <div>
                <Link className="home-link" to='/' >
                    <h1 className="app-name">WeatherAPP</h1>
                </Link>
                <p className="date">Dzisiaj jest {getDay()}, {getDate()}.</p> 
            </div>
            <div className="header-left"> 
                    <div className="search-area">
                        <input ref={searchRef}/>
                        <button onClick={() => sendSearch()}>Szukaj</button>
                    </div>          
            </div>          
        </div>
    )
}