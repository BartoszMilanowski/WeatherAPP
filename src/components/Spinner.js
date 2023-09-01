import React from "react";
import spinner from '../image/Spinner-1s-200px.gif';

export const Spinner = () => {
    return(
        <div>
            <img src={spinner} alt="Loading"/>
        </div>
    )
}