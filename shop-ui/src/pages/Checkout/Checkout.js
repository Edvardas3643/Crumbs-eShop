import React, {useContext} from "react";
import {AppContext, UserContext} from "../../App";
import "./Checkout.css"
import {NavLink, useHistory, useLocation} from "react-router-dom";
import OrderApi from "../../api/OrderApi";
import {useTranslation} from "react-i18next";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default () => {

    const history = useHistory();

    const location = useLocation();

    const {t} = useTranslation("checkout")

    const {cart, setCart} = useContext(AppContext);

    const {userLoggedIn, userData} = useContext(UserContext);

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
        let order = {
                paymentInfoDTO: userData.paymentInfo,
                ordersDTO: cart
            }

        OrderApi.newOrder(order).then(r => {
            setCart(null)
            history.push("/profile")
        })
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
                                        <li key={contents.product.id} className="checkout-contents">
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
                                                    <div>{t("qty")}</div>
                                                    <div className="qty-counter">
                                                        <div onClick={() => minusFromQty(contents)}
                                                             className="fas fa-minus-circle"/>
                                                        <div>{contents.qty}</div>
                                                        <div onClick={() => addToQty(contents)}
                                                             className="fas fa-plus-circle"/>
                                                    </div>
                                                </div>

                                                <p className="description__price">{t("price")} {contents.product.price} </p>
                                                <p className="description__price">{t("totalPrice")} {contents.product.price * contents.qty}</p>

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
                                    <PaymentInfo />
                                    <div className="flex-container">
                                        <NavLink to={{pathname: '/paymentInfo', state: {prevPath: location.pathname}}}
                                                 className="checkout-btn buy">{t("changeInfo")}</NavLink>
                                        {userData.paymentInfo.cardNumber ?
                                            <div onClick={buy} className="checkout-btn buy">{t("buy")}</div> : <></>}
                                    </div>
                                </div>

                                :
                                <NavLink to={{pathname: '/login', state: {prevPath: location.pathname}}}
                                         className="checkout-btn login">{t("login")}</NavLink>
                        }
                    </section>
                </section>
            ) : <div>{t("emptyCart")}</div>}
        </section>

    )
}