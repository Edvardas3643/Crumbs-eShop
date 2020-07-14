import React, {useContext} from "react";
import {UserContext} from "../../App";
import {Redirect, Route, useLocation} from "react-router-dom";

export default ({children, role, ...props}) => {

    const {userLoggedIn} = useContext(UserContext)

    const location = useLocation()

    return (
        <Route {...props}>
            {
                userLoggedIn() ? children :
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