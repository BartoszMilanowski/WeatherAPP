import React, {useEffect, useState} from "react";
import { Weather } from "./components/Weather";
import { Header } from "./components/Header";


export const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'; 
export const API_KEY = '';

function App() {
  
const[searchList, setSearchList] = useState([]);

const handleSearchData = (searchResult) => {
  setSearchList([...searchList, searchResult]);
}

return(
   <div>
    <Header changeSearchData={handleSearchData}/>
    <Weather fromSearch={searchList}/>
   </div>
  );
}

export default App;