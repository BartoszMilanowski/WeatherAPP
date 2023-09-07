import React, { useState } from "react";
import { Header } from "./Header";

export const Register = () => {

    const[newUser, setNewUser] = useState({});


    return(
        <div>
            <Header parentPage={'register'}/>
            <div className="login-page">
                <div className="register-form">
                    <h5>Zarejestruj się</h5>
                    <div className="register-section">
                        <input
                        type="text"
                        placeholder="Imię" 
                        onChange={(e) => setNewUser(prevState => ({...prevState, firstName: e.target.value}))}/>
                        <input
                        type="text"
                        placeholder="Adres e-mail" 
                        onChange={(e) => setNewUser(prevState => ({...prevState, login: e.target.value}))}/>
                        <input
                        type="password"
                        placeholder="Hasło" 
                        onChange={(e) => setNewUser(prevState => ({...prevState, password: e.target.value}))}/>
                        <button>Zarejestruj się</button>
                    </div>
                </div>
            </div>
        </div>
    )
}