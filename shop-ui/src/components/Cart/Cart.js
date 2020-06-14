import React from "react";
import './Cart.css';


export default (props) => {

    let cartClasses = "cart-bar"

    if(props.show) {
        cartClasses = "cart-bar open"
    }

    return (
        <div className={cartClasses}>
            <div className="cart-bar__header">
                <div onClick={props.cartClickHandler}><i className="cart-bar__close-btn fas fa-times fa-2x"/></div>
                <h2>Recently Added</h2>
            </div>
            <ul>
                <li>Your bag is currently empty.</li>
            </ul>
        </div>
    )
}