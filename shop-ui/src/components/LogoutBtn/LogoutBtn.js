import React, {useContext} from "react";
import "./LogoutBtn.css"
import {AppContext, UserContext} from "../../App";
import {setCredentials} from "../../api";
import {useHistory} from "react-router-dom";

export default () => {

    const {logout, setUserData, setOrderHistory} = useContext(UserContext)
    const {setCart} = useContext(AppContext)
    const history = useHistory();

    const logoutHandler = () => {
        logout()
        setCart(null)
        setOrderHistory(null)
        setUserData(null)
        setCredentials(null)
        history.push("/")
    }

    return <div onClick={logoutHandler} className="logout-btn fas fa-sign-out-alt fa-lg"/>

}
