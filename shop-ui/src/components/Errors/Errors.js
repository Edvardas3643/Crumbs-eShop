import React, {useContext} from "react";
import "./Errors.css"
import {AppContext} from "../../App";

export default () => {

    const {errorNotification} = useContext(AppContext);

    return (
        <>
            {errorNotification ?
                <section className="error-container">
                    <ul className="error-list">
                        {Object.values(errorNotification).map(row => (<li className="error-message" key={row}>{row}</li>))}
                    </ul>
                </section> : <></>
            }
        </>
    )
}