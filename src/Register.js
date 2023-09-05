import React, { useRef } from "react";
import { Header } from "./components/Header";
import { createClient } from "@supabase/supabase-js";

export const Register = () => {

    return(
        <div>
            <Header parentPage={'register'}/>
            <div className="login-page">
                <div className="register-form">
                    <h5>Zarejestruj się</h5>
                    <div className="register-section">
                        <input ref={nameRef} type="text" placeholder="Imię" />
                        <input ref={loginRef} type="text" placeholder="Adres e-mail" />
                        <input ref={passRef} type="password" placeholder="Hasło" />
                        <button onClick={() => register()}>Zarejestruj się</button>
                    </div>
                </div>
            </div>
        </div>
    )
}