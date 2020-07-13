import React, {useContext} from "react";
import {AppContext, UserContext} from "../../App";
import "./Checkout.css"
import {NavLink, useHistory, useLocation} from "react-router-dom";
import OrderApi from "../../api/OrderApi";
import {useTranslation} from "react-i18next";

export default () => {

    const history = useHistory();

    const location = useLocation();

    const {t} = useTranslation("checkout")

    const {cart, setCart} = useContext(AppContext);

    const {userLoggedIn, userData, paymentInfo} = useContext(UserContext);

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
        OrderApi.newOrder(paymentInfo, cart, userData).then(r => r)
        setCart(null)
        history.push("/profile")
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
                            userLoggedIn() ?
                                <div>
                                    {userData && userData.paymentInfo ?
                                        <div className="payment-info-details">
                                            <div className="payment-info-description">
                                                <div>Name: </div>
                                                <div>Surname: </div>
                                                <div>Address: </div>
                                                <div>Post Code: </div>
                                                <div>Card Number: </div>
                                            </div>
                                            <div className="payment-info-contents">
                                                <div>{userData.paymentInfo.name}</div>
                                                <div>{userData.paymentInfo.surname}</div>
                                                <div>{userData.paymentInfo.address}</div>
                                                <div>{userData.paymentInfo.postCode}</div>
                                                <div>{userData.paymentInfo.cardNumber}</div>
                                            </div>
                                        </div>
                                        : <></>
                                    }
                                    <div className="flex-container">
                                        <NavLink to={{pathname: '/paymentInfo', state: { prevPath: location.pathname }}} className="checkout-btn buy">Change Payment Info</NavLink>
                                        {userData.paymentInfo ? <div onClick={buy} className="checkout-btn buy">Buy</div> : <></>}
                                    </div>
                                </div>

                                :
                                <NavLink to="/login" className="checkout-btn login">Login</NavLink>
                        }
                    </section>
                </section>
            ) : <div>{t("emptyCart")}</div>}
        </section>

    )
}