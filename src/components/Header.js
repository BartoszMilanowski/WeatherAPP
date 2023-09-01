import React from "react";

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

export const Header = () => {

    return(
        <div className="header">
            <h1 className="app-name">WeatherAPP</h1>
            <p className="date">Dzisiaj jest {getDay()}, {getDate()}.</p>
        </div>
    )
}