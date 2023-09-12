import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Helmet } from 'react-helmet'
import { Header } from './Header'
import { ApiData } from '../data/ApiData'
import { useParams } from 'react-router-dom'
import location from '../image/icons/location.png'


export const Details = () => {

    let { name, lat, lon } = useParams();

    const [time, setTime] = useState([]);
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            await fetch(`${ApiData.API_URL_OM1}latitude=${lat}&longitude=${lon}${ApiData.API_URL_OM2}`)
            .then(res => res.json())
            .then(result => {
                setTime(result?.hourly?.time)
                setTemp(result?.hourly?.temperature_2m)
            });
        };
        fetchData();
    },[]);

    console.log(time);
    console.log(temp);

    return(
        <>
        <Helmet>
            <title>{name}</title>
        </Helmet>
        <div>
            <Header />
            <div className='details-section'>
                <div>
                    <h2><img src={location} />{name}</h2>
                </div>
                <div className='hourly-data'>
                    <div className='time'>
                        {time.map((el, i) => {
                            return(
                                <span key={i}>{moment(el).utc().format('DD.MM.YYYY HH:mm')}<br/></span>
                            )
                        })}
                    </div>
                    <div className='temp'>
                        {temp.map((el, i) => {
                            return(
                                <span key={i}>{el}&deg;C<br/></span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}