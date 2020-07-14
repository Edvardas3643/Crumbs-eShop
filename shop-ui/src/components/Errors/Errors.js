import React, {useContext} from "react";
import "./Errors.css"
import {AppContext} from "../../App";

export default () => {

    const {error, setErrorNotification} = useContext(AppContext);



    return (
        <>
            {error && error.active ?
                <section className="error-container">
                    <ul className="error-list">
                        {error.content.map(row => (<li className="error-message">{row}</li>))}
                    </ul>
                </section> : <></>
            }
        </>
    )
}