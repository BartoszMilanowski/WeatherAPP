import React, {useState} from "react";
import { Weather } from "./Weather";
import { Header } from "./Header";


export const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'; 
export const API_KEY = 'f5c0c39a31e588068cff89c82d020f70';

function App() {

  const[searchResult, setSearchResult] = useState(null);

  const clearSearch = () =>{
    setSearchResult(null);
  }


  return(
    <div>
      <Header setFromSearch={setSearchResult} parentPage={'main'}/>
      <Weather searchResult={searchResult} clear={clearSearch} />
   </div>
  );
}

export default App;