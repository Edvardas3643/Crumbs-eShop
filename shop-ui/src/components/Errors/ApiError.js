import React, {useContext} from "react";
import "./Errors.css"
import {AppContext} from "../../App";

export default () => {

    const {apiErrorNotification} = useContext(AppContext);

    console.log(apiErrorNotification)

    return (
        <>
            {apiErrorNotification ?
                <section className="error-container">
                    <ul className="error-list">
                        <li className="error-message">{apiErrorNotification.data.error}</li>
                        <li className="error-message">{apiErrorNotification.data.code}</li>
                        <li className="error-message"> Labas Turi Erroru </li>
                    </ul>
                </section> : <></>
            }
        </>
    )
}