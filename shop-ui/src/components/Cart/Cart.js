import React, {useContext} from "react";
import './Cart.css';
import {AppContext} from "../../App";


export default () => {

    const {cartBlock, cartBlockHandler} = useContext(AppContext)

    let cartClasses = "cart-bar"

    if (cartBlock) {
        cartClasses = "cart-bar open"
    }

    return (
        <div className={cartClasses}>
            <div className="cart-bar__header">
                <div onClick={cartBlockHandler}><i className="cart-bar__close-btn fas fa-times fa-2x"/></div>
                <h2>Recently Added</h2>
            </div>
            <ul>
                <li>Your bag is currently empty.</li>
            </ul>
        </div>
    )
}