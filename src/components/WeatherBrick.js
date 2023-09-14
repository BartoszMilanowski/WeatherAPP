import React, { useEffect, useState } from "react";
import therometer from '../image/icons/thermometer.png';
import location from '../image/icons/location.png';
import clear from '../image/icons/clear.png';
import thunderstorm from '../image/icons/thunderstorm.png';
import cloudy from '../image/icons/cloudy.png';
import drizzle from '../image/icons/drizzle.png';
import rainy from '../image/icons/rainy.png';
import snow from '../image/icons/snow.png';
import mist from '../image/icons/mist.png';
import xMark from '../image/icons/x-mark.png';
import { BarLoader } from "react-spinners";
import { ApiData } from "../data/ApiData";
import { Link } from "react-router-dom";

export const WeatherBrick = ({locData, cat, clear}) => {

    const[loc, setLoc] = useState('');
    const[lat, setLat] = useState('');
    const[long, setLong] = useState('');
    const[localData, setLocalData] = useState('');
    const[loading, setLoading] = useState(true);
    const[notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoc(locData);
    })

    useEffect(() => {
        if(loc === 'here'){
            const fetchLocal = async() =>{
                navigator.geolocation.getCurrentPosition(function(pos) {
                    setLat(pos.coords.latitude);
                    setLong(pos.coords.longitude);
                });
                
                await fetch(`${ApiData.API_URL_OW}lat=${lat}&lon=${long}&units=metric&APPID=${ApiData.API_KEY_OW}`)
                .then(res => res.json())
                .then(result => {
                    setLocalData(result);
                    console.log(result);
                    if(result.cod != '400'){
                        setLoading(false);
                    }
                });
            };
            fetchLocal();
        } else {
            const fetchData = async() => {
                await fetch(`${ApiData.API_URL_OW}q=${loc}&units=metric&appid=${ApiData.API_KEY_OW}`)
                .then(res => res.json())
                .then(result => {
                    setNotFound(false);
                    setLocalData(result);
                    console.log(result);
                    if(result.cod != '400'){
                        setLoading(false);
                    }
                    if(result.cod == '404'){
                        setNotFound(true);
                    }
                })
            };
            fetchData();
        }
    },[lat, long, loc]);

    let icon = chooseIcon(localData);

    const clearSearch = () => {
        clear();
    }

    return(
        <div className="weather-brick">
            {
                loading ?
                <BarLoader 
                className="loader"
                /> :
                <div>
                    {
                        notFound ?
                        <div>
                            <div className="weather-data-left">
                                <p className="location-name">Nie znaleziono miasta</p>
                            </div>
                            <div className="weather-data-right">
                            <div>
                                <img
                                className="close-btn"
                                src={xMark}
                                onClick={clearSearch}
                                />
                            </div>
                            </div>
                        </div> :
                        <div className="weather-data">
                        <Link to={`/weather/details/${localData.name}/${localData?.coord?.lat}/${localData?.coord?.lon}`}>
                            <div className="weather-data-left">
                                <div>
                                    <img className="temp-icon"
                                    src={location} />
                                    <p className="location-name">{localData.name}</p>
                                </div>
                                <div>
                                    <img className="temp-icon" 
                                    src={therometer}/>
                                    <p>{localData?.main?.temp}&deg;C</p>
                                </div>
                                <div>
                                    <img className="temp-icon" src={icon} />
                                </div>
                            </div>
                        </Link>
                        <div className="weather-data-right">
                            {cat == 'search' ?
                            <div>
                                <img
                                className="close-btn"
                                src={xMark}
                                onClick={clearSearch}
                                />
                            </div> : 
                            <div />}
                        </div>
                    </div>
                    }

                </div>
                }
        </div>
    )
}

const chooseIcon = (data) => {

    switch(data.weather?.[0].main){
        case 'Clear':
            return clear;
            break;
        case 'Thunderstrom':
            return thunderstorm;
            break;
        case 'Clouds':
            return cloudy;
            break;
        case 'Drizzle':
            return drizzle;
            break;
        case 'Rain':
            return rainy;
            break;
        case 'Snow':
            return snow;
            break;
        case 'Mist': case 'Smoke': case 'Haze': case 'Dust': case 'Fog': 
        case 'Sand': case 'Dust': case 'Ash': case 'Squall': case 'Tornado':
            return mist;
            break;
        default:
            return '';
    }
}