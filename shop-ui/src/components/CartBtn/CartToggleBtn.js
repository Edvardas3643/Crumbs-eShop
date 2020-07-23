import React, {useContext} from "react";
import {AppContext} from "../../App";
import "./CartBtn.css"

export default () => {

    const {cartBlockHandler, cart} = useContext(AppContext)

    return (
        <div className="toggle-btn cart-btn" onClick={cartBlockHandler}>
            {cart?.length > 0 ? <div className="cart-counter">{cart?.length}</div> : <></>}
            <i className="fas fa-shopping-cart fa-lg"/>
        </div>
    )
}

