import React from "react";
import { Weather } from "./Weather";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


export const API_URL_OW = 'https://api.openweathermap.org/data/2.5/weather?'; 
export const API_KEY_OW = 'f5c0c39a31e588068cff89c82d020f70';

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/weather' />}/>
        <Route path="/weather" element={<Weather />} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;