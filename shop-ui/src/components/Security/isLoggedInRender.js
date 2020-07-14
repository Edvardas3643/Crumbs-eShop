import React, {useContext} from "react";
import {UserContext} from "../../App";

export default ({children}) => {

    const {userLoggedIn} = useContext(UserContext)

    return (
        userLoggedIn() ? children : <></>
    )
}