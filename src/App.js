import React, {useState} from "react";
import { Weather } from "./components/Weather";
import { Header } from "./components/Header";


export const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'; 
export const API_KEY = '';

function App() {

  const[searchResult, setSearchResult] = useState(null);

  const clearSearch = () =>{
    setSearchResult(null);
  }
 
  return(
    <div>
      <Header setFromSearch={setSearchResult} parentPage={'main'}/>
      <Weather searchResult={searchResult} clear={clearSearch}/>
   </div>
  );
}

export default App;