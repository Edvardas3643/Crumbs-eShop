import React, {useContext} from "react";
import "./Errors.css"
import {AppContext} from "../../App";

export default () => {

    const {errorNotification} = useContext(AppContext);

    return (
        <>
            {console.log(errorNotification != null)}
            {errorNotification != null ?
                <section className="error-container">
                    <ul className="error-list">
                        {console.log(errorNotification)}
                        {Object.values(errorNotification).map(row => (<li className="error-message">{row}</li>))}
                    </ul>
                </section> : <></>
            }
        </>
    )
}