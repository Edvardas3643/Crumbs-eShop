import React, {useContext, useEffect, useState} from "react";
import "./UserProfile.css";
import {UserContext} from "../../App";
import UserApi from "../../api/UserApi";
import {NavLink} from "react-router-dom";

export default () => {

    const {userData, userLoggedIn} = useContext(UserContext)
    const [orderHistory, setOrderHistory] = useState(null)

    useEffect(() => {
        UserApi.fetchOrderHistory()
            .then(response => {
                setOrderHistory(response.data);
            })
    }, [])

    return (
        <section className="container-wide">
            <section className="profile-container">
                <section className="order-history-container">
                    {
                        orderHistory && orderHistory.map(or => {
                            let sum = 0
                            return (
                                <div className="history-container">
                                    <div className="history-timestamp">Ordered on: {or.timestamp}</div>
                                    <div className="history-timestamp">Ordered
                                        By: {or.paymentInfo.name} {or.paymentInfo.surname}</div>
                                    <div className="history-timestamp">Delivering to: {or.paymentInfo.address}</div>
                                    {or.orders.map(order => {
                                        sum += order.price * order.quantity
                                        return (
                                            <section className="order-container">
                                                <div className="order-img"
                                                     style={{backgroundImage: `url(http://localhost:8080/files/${order.product.img})`}}/>
                                                <div className="order-info-container">
                                                    <div className="order-title">Title: {order.product.title}</div>
                                                    <div className="order-price">Price: {order.price}</div>
                                                    <div className="order-quantity">Quantity: {order.quantity}</div>
                                                </div>
                                            </section>
                                        )

                                    })}
                                    <div>Total Price: {sum}</div>
                                </div>
                            )
                        })
                    }
                </section>
                <section className="profile-menu">

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
                    <NavLink to="/paymentInfo" className="payment-info-btn">Change Payment Info</NavLink>
                </section>
            </section>
        </section>
    )
}