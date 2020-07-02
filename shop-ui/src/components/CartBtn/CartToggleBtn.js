import React, {useContext} from "react";
import {AppContext} from "../../App";
import "./CartBtn.css"
export default () => {

    const {cartBlockHandler} = useContext(AppContext)

    return (
        <div className="toggle-btn" onClick={cartBlockHandler}>
            <i className="cart-btn fas fa-shopping-cart fa-lg" />
        </div>
    )
}

