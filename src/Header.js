import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Header = ({setFromSearch, parentPage}) => {

    const searchRef = useRef(null);

    const[parent, setParent] = useState();

    const userName = Cookies.get('userName');


    useEffect(() => {
        setParent(parentPage);
    },[parentPage]);

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
                <div className="hi-message">
                {
                    userName != null ? 
                    <p> Cześć {userName}</p> :
                    <div className="links">
                        {  
                        parent != 'login' ? 
                            <div>
                                <Link className="menu-link" to={'/login'}>
                                    <p>Zaloguj</p>
                                </Link>
                            </div> :
                            <div />
                        }
                        {
                        parent != 'register' ?
                        <div>
                            <Link className="menu-link" to={'/register'} >
                                <p>Zarejestruj się</p>
                            </Link>  
                        </div> :
                        <div />
                        }
                        
                    </div>
                } 
                </div>
                <div>
                {
                    parent === 'main' ?
                    <div className="search-area">
                        <input ref={searchRef}/>
                        <button onClick={() => sendSearch()}>Szukaj</button>
                    </div> :
                    <div />
                }  
                </div>
          
            </div>
            
            
        </div>
    )
}