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
                    <table className='hourly-table'>
                        <td>
                            <th>Data</th>
                            {time.map((el, i) => {
                                return(
                                    <tr key={i} className={i % 2 == 0 ? 'gray' : ''}>
                                        <span>{moment(el).utc().format('DD.MM.YYYY')}</span>
                                    </tr>
                                )
                            })}
                        </td>
                        <td>
                            <th>Godzina</th>
                            {time.map((el, i) => {
                                return(
                                    <tr key={i} className={i % 2 == 0 ? 'gray' : ''}>
                                        <span>{moment(el).utc().format('HH:mm')}</span>
                                    </tr>
                                )
                            })}
                        </td>
                        <td>
                            <th>Temp.</th>
                            {temp.map((el, i) => {
                                return(
                                    <tr key={i} className={i % 2 == 0 ? 'gray' : ''}>
                                        <span>{el}&deg;C</span>
                                    </tr>
                                )
                            })}
                        </td>
                    </table>
                </div>
            </div>
        </div>
        </>

    )
}