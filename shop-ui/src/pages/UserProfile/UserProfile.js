import React, {useContext, useEffect} from "react";
import "./UserProfile.css";
import {UserContext} from "../../App";
import {NavLink, useLocation} from "react-router-dom";
import OrderApi from "../../api/OrderApi";
import {useTranslation} from "react-i18next";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default () => {

    const {t} = useTranslation("profile")

    const {userData, setOrderHistory, orderHistory} = useContext(UserContext)

    const location = useLocation()

    useEffect(() => {
        OrderApi.fetchOrderHistory()
            .then(response => {
                setOrderHistory(response.data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])

    return (
        <section className="container-wide">
            <section className="profile-container">
                <section className="order-history-container">
                    {
                        orderHistory && orderHistory.map(or => {
                            let sum = 0
                            return (
                                <section key={or.paymentInfoDTO.id} className="history-container">
                                    <div className="history-timestamp">{t("orderedOn")} {or.timestamp}</div>
                                    <div className="history-timestamp">{t("orderedBy")} {or.paymentInfoDTO.name} {or.paymentInfoDTO.surname}</div>
                                    <div className="history-timestamp">{t("deliveringTo")} {or.paymentInfoDTO.address}</div>
                                    {or.ordersDTO.map(order => {
                                        sum += Number(order.price) * Number(order.qty)
                                        return (
                                            <section key={order.id} className="order-container">
                                                <div className="order-img"
                                                     style={{backgroundImage: `url(http://localhost:8080/files/${order.product.img})`}}/>
                                                <div className="order-info-container">
                                                    <div className="order-title">{t("title")} {order.product.title}</div>
                                                    <div className="order-price">{t("price")} {order.price}</div>
                                                    <div className="order-quantity">{t("qty")} {order.qty}</div>
                                                </div>
                                            </section>
                                        )

                                    })}
                                    <div>Total Price: {sum}</div>
                                </section>
                            )
                        })
                    }
                </section>
                <section className="profile-menu">
                    <PaymentInfo />
                    <NavLink to={{pathname: '/paymentInfo', state: { prevPath: location.pathname }}} className="payment-info-btn">{t("changeInfo")}</NavLink>
                </section>
            </section>
        </section>
    )
}