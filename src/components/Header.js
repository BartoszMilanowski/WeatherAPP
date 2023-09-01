import React, { useRef } from "react";

export const Header = ({changeSearchData}) => {

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
        changeSearchData(searchRef.current.value);
        searchRef.current.value = '';
    }

    return(
        <div className="header">
            <div>
                <h1 className="app-name">WeatherAPP</h1>
                <p className="date">Dzisiaj jest {getDay()}, {getDate()}.</p> 
            </div>
            
            <div className="search-area">
                <input ref={searchRef}/>
                <button onClick={() => sendSearch()}>Szukaj</button>
            </div>
        </div>
    )
}