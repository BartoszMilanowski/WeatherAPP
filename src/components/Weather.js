import React ,{ useRef } from "react";
import { useCookies } from "react-cookie";
import { Helmet } from "react-helmet";
import { WeatherBrick } from "./WeatherBrick";
import { Header } from "./Header";
import Cookies from "js-cookie";

export const Weather = () => {

    const searchRef = useRef(null);

    const[searchCookies, setSearchCookies] = useCookies(['result']);

    const searchHandle = () => {
        setSearchCookies('result' ,searchRef.current.value);
        searchRef.current.value = '';
    }

    const clearSearch = () =>{
      Cookies.remove('result');
    }

    return(
        <div>
            <Helmet>
                <title>Aktualna pogoda</title>
            </Helmet>
            <Header />
            <div className='weather-section'>
                <div className="search-area">
                    <input ref={searchRef}/>
                    <button onClick={() => searchHandle()}>Szukaj</button>
                </div> 
                <div>
                    <div>
                        {
                        searchCookies.result != null ? 
                        <div className="brick-area">
                            <h2 className="loc-headline">Wynik wyszukiwania</h2>
                            <WeatherBrick locData={searchCookies.result} cat={'search'} clear={clearSearch} />
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