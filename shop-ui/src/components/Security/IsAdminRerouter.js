import React, {useContext} from "react";
import {UserContext} from "../../App";
import {Redirect, Route, useLocation} from "react-router-dom";

export default ({children, role, ...props}) => {

    const {userLoggedIn, userData} = useContext(UserContext)

    const location = useLocation()

    return (
        <Route {...props}>
            {
               userData?.roles.includes("admin") && userLoggedIn() ? children :
                    <Redirect to={{
                        pathname: "/login",
                        state: {
                            prevPath: location
                        }
                    }}/>
            }
        </Route>
    )
}