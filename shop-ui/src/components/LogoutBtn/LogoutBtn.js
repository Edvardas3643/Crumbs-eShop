import React, {useContext} from "react";
import "./LogoutBtn.css"
import {UserContext} from "../../App";
import {setCredentials} from "../../api";

export default () => {

    const {logout, userLoggedIn} = useContext(UserContext)

    const logoutHandler = () => {
        console.log(logout)
        logout()
        setCredentials(null)
        console.log(userLoggedIn());
    }

    return <div onClick={logoutHandler} className="logout-btn fas fa-sign-out-alt fa-lg"/>

}
