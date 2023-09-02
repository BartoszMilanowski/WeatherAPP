import React, { useEffect, useState } from "react";
import { WeatherBrick } from "./WeatherBrick";


export const FoundList = ({list}) => {

    const[locList, setLocList] = useState([]);

    list.forEach((el) => {
        console.log('list ' + el);
    })

    useEffect(() => {
        setLocList(list);
    })

    locList.forEach((el) => {
        console.log('locList ' + el);
    })

    return(
        <div>
            {locList.map((el) => {
                return(
                    <WeatherBrick locData={el} />
                )
            })}
        </div>
    )
}