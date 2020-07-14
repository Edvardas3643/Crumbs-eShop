import React, {useContext} from "react";
import {UserContext} from "../../App";
import {useHistory} from "react-router-dom"

export default ({children}) => {

    const {userLoggedIn} = useContext(UserContext)
    const history = useHistory()

    if (!userLoggedIn()) {
        history.push("/")
    }

    return (
        userLoggedIn() ? children : <></>
    )
}