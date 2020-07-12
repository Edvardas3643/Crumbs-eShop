import React, {useContext} from "react";
import './Cart.css';
import {AppContext} from "../../App";
import {NavLink} from "react-router-dom";


export default () => {


    const {cart, setCart, cartBlock, cartBlockHandler} = useContext(AppContext)

    let total = 0

    let cartClasses = "cart-bar"

    if (cartBlock) {
        cartClasses = "cart-bar open"
    }

    const removeProduct = (id) => {
        if (cart != null) {
            let filteredCart = cart.filter((item) => item.product.id !== id)
            setCart(filteredCart)
        }
    }

    return (
        <div className={cartClasses}>
            <div className="cart-bar__header">
                <div onClick={cartBlockHandler}><i className="cart-bar__close-btn fas fa-times fa-2x"/></div>
                <h2>Recently Added</h2>
            </div>
            <ul>
                {
                    cart && Object.values(cart).map(contents => {
                            total = (total + (contents.product.price * contents.qty))
                            return (
                                <li className="cart-contents">
                                    <div
                                        className="cart-contents__preview-img"
                                        style={{backgroundImage: `url(http://localhost:8080/files/${contents.product.img})`}}
                                    >
                                        <i
                                        onClick={() => removeProduct(contents.product.id)}
                                        className="cart-contents__remove-product-btn fas fa-times fa-2x"
                                        />
                                    </div>
                                    <div className="cart-contents__description">
                                        <p className="description__title">{contents.product.title}</p>
                                        <p className="description__qty">Quantity: {contents.qty}</p>
                                        <p className="description__price">Total: {contents.product.price * contents.qty} </p>
                                    </div>
                                </li>
                            )
                        }
                    )
                }


            </ul>

            <div className="cart-footer">
                <p className="total-price">Total Price: {total}</p>
                <NavLink to="/checkout" onClick={cartBlockHandler} className="checkout-btn">Checkout</NavLink>
            </div>
        </div>
    )
}