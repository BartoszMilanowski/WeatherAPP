import React, { useState, useEffect } from "react";
import { WeatherBrick } from "./WeatherBrick";
import { Spinner } from "./Spinner";

export const Weather = () => {

    const[loading, setLoading] = useState(true);
    const[lat, setLat] = useState([]);
    const[long, setLong] = useState([]);
    const[data, setData] = useState([]);

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    const API_KEY = 'someApiKey';

    useEffect(() => {
        const fetchData = async() => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            setLat(pos.coords.latitude);
            setLong(pos.coords.longitude);
        });
  
        await fetch(`${API_URL}lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
            setData(result);
            console.log(result);
            if(result.cod !== '400'){
                setLoading(false);
            }
            
        });
    }
    fetchData();
    }, [lat, long]);

   return(
    <div className='weather-section'>

        {loading ? <Spinner /> : 
        <div>
            <h2 className="loc-headline">Twoja lokalizacja</h2>
            <WeatherBrick data={data} />
        </div>
        }     
    
    </div>
   )
}

