import React, {useContext} from "react";
import {UserContext} from "../../App";

export default ({children, role, ...props}) => {

    const {userLoggedIn, userData} = useContext(UserContext)

    return (
        <>
            {
                userData?.roles.includes("admin") && userLoggedIn() ? children : <></>
            }
        </>
    )
}