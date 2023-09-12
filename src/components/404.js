import React from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return(
        <div>
            <Header />
            <div className="not-found-section">
                <h2>404</h2>
                <span>Powrót do <Link to={'/'}>strony głównej</Link></span>
            </div>
        </div>
    )
}