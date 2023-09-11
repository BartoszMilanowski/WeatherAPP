import React ,{ useState } from "react";
import { WeatherBrick } from "./WeatherBrick";
import { Header } from "./Header";

export const Weather = () => {

    const[searchResult, setSearchResult] = useState(null);

    const clearSearch = () =>{
      setSearchResult(null);
    }  


    return(
        <div>
            <Header setFromSearch={setSearchResult}/>
            <div className='weather-section'>
                <div>
                    <div>
                        {
                        searchResult != null ? 
                        <div>
                            <h2 className="loc-headline">Wynik wyszukiwania</h2>
                            <WeatherBrick locData={searchResult} cat={'search'} clear={clearSearch} />
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
        </div>
    ) 
};