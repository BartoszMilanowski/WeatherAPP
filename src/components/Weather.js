import React from "react";
import { WeatherBrick } from "./WeatherBrick";

export const Weather = ({searchResult, clear}) => {


    return(
        <div className='weather-section'>
            <div>
                <div>
                    {
                        searchResult != null ? 
                        <div>
                            <h2 className="loc-headline">Wynik wyszukiwania</h2>
                            <WeatherBrick locData={searchResult} cat={'search'} clear={clear} />
                        </div> :
                        < div />
                    }
                </div>
                <div>
                    <h2 className="loc-headline">Twoja lokalizacja</h2>
                    <WeatherBrick locData={'here'} />
                </div>
            </div> 
        </div>
    ) 
};