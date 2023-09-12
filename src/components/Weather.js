import React ,{ useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { WeatherBrick } from "./WeatherBrick";
import { Header } from "./Header";

export const Weather = () => {

    const searchRef = useRef(null);

    const[searchResult, setSearchResult] = useState(null);

    const searchHandle = () => {
        setSearchResult(searchRef.current.value);
        searchRef.current.value = '';
    }

    const clearSearch = () =>{
      setSearchResult(null);
    }

    return(
        <div>
            <Helmet>
                <title>Aktualna pogoda</title>
            </Helmet>
            <Header setFromSearch={setSearchResult}/>
            <div className='weather-section'>
                <div className="search-area">
                    <input ref={searchRef}/>
                    <button onClick={() => searchHandle()}>Szukaj</button>
                </div> 
                <div>
                    <div>
                        {
                        searchResult != null ? 
                        <div className="brick-area">
                            <h2 className="loc-headline">Wynik wyszukiwania</h2>
                            <WeatherBrick locData={searchResult} cat={'search'} clear={clearSearch} />
                        </div> :
                        < div />
                        }
                    </div>
                    <div className="brick-area">
                        <h2 className="loc-headline">Twoja lokalizacja</h2>
                        <WeatherBrick locData={'here'} />
                    </div>
                </div> 
            </div>
        </div>
    ) 
};