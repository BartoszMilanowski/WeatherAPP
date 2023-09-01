import React, {useEffect, useState} from "react";
import { Weather } from "./components/Weather";
import { Header } from "./components/Header";

function App() {

return(
   <div>
    <Header />
    <Weather />
   </div>
  );
}

export default App;
