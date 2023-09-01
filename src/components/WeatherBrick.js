import React from "react";
import therometer from '../image/icons/thermometer.png';
import location from '../image/icons/location.png';
import clear from '../image/icons/clear.png';
import thunderstorm from '../image/icons/thunderstorm.png';
import cloudy from '../image/icons/cloudy.png';
import drizzle from '../image/icons/drizzle.png';
import rainy from '../image/icons/rainy.png';
import snow from '../image/icons/snow.png';
import mist from '../image/icons/mist.png';

export const WeatherBrick = ({data}) => {

  
    let icon = chooseIcon(data);

    return(

        <div className="weather-brick">
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex'}}>
                    <img className="temp-icon"
                    src={location} />
                    <p className="location-name">{data.name}</p>
                </div>
                <div style={{display: 'flex'}}>
                    <img className="temp-icon" 
                    src={therometer}/>
                    <p>{data?.main?.temp}&deg;C</p>
                </div>
                <div>
                    <img className="temp-icon" src={icon} />
                </div>
                <div>
                    <p>{data?.wind?.speed}km/h</p>
                </div>
            </div>
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