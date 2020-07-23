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
                        <li className="error-message">{apiErrorNotification?.response.data.error}</li>
                    </ul>
                </section> : <></>
            }
        </>
    )
}