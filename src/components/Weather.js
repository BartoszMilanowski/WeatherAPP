import React, { useState, useEffect } from "react";
import { WeatherBrick } from "./WeatherBrick";
import { Spinner } from "./Spinner";
import { API_URL, API_KEY } from '../App';  
import { FoundList } from "./FoundList";

export const Weather = ({fromSearch}) => {

    const[loading, setLoading] = useState(false);
    // const[lat, setLat] = useState('');
    // const[long, setLong] = useState('');
    // const[localData, setLocalData] = useState('');
    const[foundList, setFoundList] = useState([]);

    // useEffect(() => {
    //      const fetchData = async() => {
    //         navigator.geolocation.getCurrentPosition(function(pos) {
    //             setLat(pos.coords.latitude);
    //             setLong(pos.coords.longitude);
    //         });
            
    //         await fetch(`${API_URL}lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setLocalData(result);
    //             console.log(result);
    //             if(result.cod !== '400'){
    //                 setLoading(false);
    //             }
    //         });
    //     }
    //     fetchData();
    // }, [lat, long]);

    useEffect(() => {
        setFoundList(fromSearch);
    });

   return(
    <div className='weather-section'>

        {loading ? <Spinner /> : 
        <div>
            <div>
                <h2 className="loc-headline">Twoja lokalizacja</h2>
                <WeatherBrick locData={'here'}/>
            </div>
            {foundList.length != 0 ?
            <div>
                <h2 className="loc-headline">Szukane</h2>
                <FoundList list={foundList}/>
            </div> :
            <div />
            }
        </div>
       
        }     
    
    </div>
   ) 
};