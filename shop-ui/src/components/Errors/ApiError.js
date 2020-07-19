import React, {useContext} from "react";
import "./Errors.css"
import {AppContext} from "../../App";

export default () => {

    const {apiErrorNotification} = useContext(AppContext);

    return (
        <>
            {apiErrorNotification ?
                <section className="error-container">
                    <ul className="error-list">
                        <li className="error-message">{apiErrorNotification.data.error}</li>
                        <li className="error-message">{apiErrorNotification.data.code}</li>
                    </ul>
                </section> : <></>
            }
        </>
    )
}