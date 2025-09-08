import React from "react";
import "./LoginSignUp.css";
import password_icon from "../assets/padlock (2).png";
import {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

const LoginSignUp = () => {
    const [value, setValue] = useState();
    const [action, setAction] = useState("Sign Up");

    return (

        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>

            </div>
            <div className="inputs">
                <div className="input">
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        flags={flags}
                        defaultCountry="UG"
                        onChange={setValue}/>
                 </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Enter password"/>
                </div>

            </div>
                    <div className="remember">
                        <input type="checkbox"/>
                        <div className="text">Remember Me</div>
                    </div>
                  <div className="submit-container">
                     <div className={action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
                      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
                  </div>


        </div>

    );
}
export default LoginSignUp;