import React, {useContext, useState} from "react";
import {AppContext, UserContext} from "../../App";
import "./Checkout.css"

export default () => {


    const {cart, setCart} = useContext(AppContext)

    const {loggedIn} = useContext(UserContext)

    const removeProduct = (id) => {
        if (cart != null) {
            let filteredCart = cart.filter((item) => item.product.id !== id)
            setCart(filteredCart)
        }
    }

    const addToQty = (contents) => {
        let filteredCart = cart.filter((item) => item.product.id !== contents.id)
        setCart(filteredCart, contents.qty = contents.qty + 1)
    }

    const minusFromQty = (contents) => {
        if (contents.qty > 1) {
            let filteredCart = cart.filter((item) => item.product.id !== contents.id)
            setCart(filteredCart, contents.qty = contents.qty - 1)
        }
    }

    const buy = () => {
    }

    let total = 0

    return (
        <section className="container-wide main-container">
            {cart && cart.length > 0 ? (
                <section className="checkout-container ">

                    <ul>

                        {
                            cart && Object.values(cart).map(contents => {
                                    total = (total + (contents.product.price * contents.qty))
                                    return (
                                        <li className="checkout-contents">
                                            <div
                                                className="checkout-contents__preview-img"
                                                style={{backgroundImage: `url(http://localhost:8080/files/${contents.product.img})`}}
                                            >
                                                <i
                                                    onClick={() => removeProduct(contents.product.id)}
                                                    className="checkout-contents__remove-product-btn fas fa-times fa-2x"
                                                />
                                            </div>
                                            <div className="checkout-contents__description">
                                                <p className="description__title">{contents.product.title}</p>
                                                {/*<p className="description__qty">Quantity: {contents.qty}</p>*/}

                                                <div className="product-qty-container">
                                                    <div>Qty</div>
                                                    <div className="qty-counter">
                                                        <div onClick={() => minusFromQty(contents)}
                                                             className="fas fa-minus-circle"/>
                                                        <div>{contents.qty}</div>
                                                        <div onClick={() => addToQty(contents)}
                                                             className="fas fa-plus-circle"/>
                                                    </div>
                                                </div>

                                                <p className="description__price">Price: {contents.product.price} </p>
                                                <p className="description__price">Total: {contents.product.price * contents.qty}</p>

                                            </div>
                                        </li>
                                    )
                                }
                            )
                        }

                    </ul>

                    <section className="checkout-controls">
                        {
                            loggedIn ?
                                <div className="checkout-btn buy" onClick={() => buy}>Buy</div>
                                :
                                <div className="checkout-btn login" onClick={() => buy}>Login</div>
                        }
                        <p>Subtotal: </p>
                    </section>
                </section>
            ) : <>The Cart Is Currently Empty</>}
        </section>

    )
}