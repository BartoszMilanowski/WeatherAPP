import React from "react";
import { Weather } from "./components/Weather";
import { Air } from "./components/Air";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


export const API_URL_OW = 'https://api.openweathermap.org/data/2.5/weather?'; 
export const API_KEY_OW = '';

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/weather' />}/>
        <Route path="/weather" element={<Weather />} />
        <Route path="/air" element={<Air />} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;