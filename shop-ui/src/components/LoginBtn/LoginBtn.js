import React, {useContext} from "react";
import "./LoginBtn.css"
import {useHistory} from "react-router-dom";
import {UserContext} from "../../App";

export default () => {

    const history = useHistory();
    const {userLoggedIn} = useContext(UserContext)

    const userHandler = () => {
        if (userLoggedIn){
            history.push("/login");
        }
    }

    return (
       <div onClick={userHandler} className="login-btn fas fa-user fa-lg" />
    )
}