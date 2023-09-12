import React from "react";
import { Weather } from "./components/Weather";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/404";
import { Details } from "./components/Details";



function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/weather' />}/>
        <Route path="/weather" element={<Weather />} />
        <Route path="/weather/details/:name/:lat/:lon" element={<Details />} />
        <Route path= '*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;