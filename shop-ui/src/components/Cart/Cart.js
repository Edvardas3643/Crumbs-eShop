import React, {useContext} from "react";
import './Cart.css';
import {AppContext} from "../../App";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


export default () => {


    const {cart, setCart, cartBlock, cartBlockHandler} = useContext(AppContext)

    const {t} = useTranslation("cart")

    let total = 0

    let cartClasses = "cart-bar"

    if (cartBlock) {
        cartClasses = "cart-bar open"
    }

    const removeProduct = (id) => {
        let filteredCart = cart?.filter((item) => item.product.id !== id)
        setCart(filteredCart)
    }

    return (
        <div className={cartClasses}>
            <div className="cart-bar__header">
                <div onClick={cartBlockHandler}><i className="cart-bar__close-btn fas fa-times fa-2x"/></div>
                <h2>{t("recentlyAdded")}</h2>
            </div>
            <ul>
                {
                    cart && Object.values(cart).map((contents, index) => {
                            total = (total + (contents.product.price * contents.qty))
                            let length = Object.values(cart).length
                            return length >= index  && length - 5 <= index?
                                <li key={index} className="cart-contents">
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
                                        <p className="description__qty">{t("qty")} {contents.qty}</p>
                                        <p className="description__price">{t("totalPrice")} {Number((contents.product.price * contents.qty).toFixed(2))} </p>
                                    </div>
                                </li>
                                : <></>
                        }
                    )
                }


            </ul>

            <div className="cart-footer">
                <p className="total-price">{t("totalPrice")} {total}</p>
                <NavLink to="/checkout" onClick={cartBlockHandler} className="checkout-btn">{t("checkout")}</NavLink>
            </div>
        </div>
    )
}