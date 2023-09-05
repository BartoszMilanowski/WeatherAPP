import React from "react";
import { Header } from "./components/Header";
import Cookies from 'js-cookie';

export const Login = () => {

    return(
        <div>
            <Header parentPage={'login'}/>
            <div className="login-page">
                <div className="login-form">
                    <h5>Zaloguj</h5>
                    <div className="login-section">
                        <input type="text" placeholder="Login"/>
                        <input type="password" placeholder="Hasło"/>
                        <button>Zaloguj</button>
                    </div>             
                </div>
            </div>
        </div>
       
    )
}