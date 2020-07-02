import React, {useContext} from "react";
import {AppContext} from "../../App";

export default () => {
    const {navigationBlockHandler} = useContext(AppContext)

    return (
        <div className="toggle-btn" onClick={navigationBlockHandler}>
            <i className="header-btn fas fa-bars fa-lg"/>
        </div>
    )

}



