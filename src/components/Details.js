import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { ApiData } from '../data/ApiData'
import { useParams } from 'react-router-dom'

export const Details = () => {

    let { name, lat, lon } = useParams();

    const [time, setTime] = useState([]);
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            await fetch(`${ApiData.API_URL_OM1}latitude=${lat}&longitude=${lon}${ApiData.API_URL_OM2}`)
            .then(res => res.json())
            .then(result => {
                setTime(result.hourly.time)
                setTemp(result.hourly.temperature_2m)
            });
        };
        fetchData();
    },[]);

    console.log(time);
    console.log(temp);

    return(
        <div>
            <Header />

        </div>
    )
}