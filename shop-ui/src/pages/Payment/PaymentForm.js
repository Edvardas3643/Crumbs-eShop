import React, {useContext} from "react";
import "./Payment.css"
import {Field, Form, Formik} from "formik";
import loginBg from "../../assets/img/login-bg.jpg";
import {AppContext, UserContext} from "../../App";
import OrderApi from "../../api/OrderApi";

export default () => {

    const {userData} = useContext(UserContext)
    const {cart} = useContext(AppContext)

    const initialValues = {
        name:'',
        surname: '',
        address: '',
        postCode: '',
        cardNumber: '',
    }

    const onSubmit = (values) => {
        OrderApi.newOrder(values, cart, userData).then(r => r.data)
    }

    return (
        <section className="container-wide">
            <section className="payment-container" style={{backgroundImage: "url(" + loginBg + ")"}}>
                <section className="payment-form-inner-container">
                    <div className="payment-form-inner-container-bg-left"/>
                    <div className="payment-form-inner-container-bg-bottom"/>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                        {(props) => (
                            <Form className="login-form">

                                <p>
                                    Contact Info
                                </p>

                                <div>
                                    <Field className="form-field" name="name" type="text" placeholder="Name"/>
                                </div>
                                <div>
                                    <Field className="form-field" name="surname" type="text"
                                           placeholder="Surname"/>
                                </div>
                                <div>
                                    <Field className="form-field" name="address" type="text" placeholder="Address"/>
                                </div>
                                <div>
                                    <Field className="form-field" name="postCode" type="text"
                                           placeholder="Post Code"/>
                                </div>
                                <div>
                                    <Field className="form-field" name="cardNumber" type="text"
                                           placeholder="Card Number"/>
                                </div>
                                <div>
                                    <button className="form-btn" type="submit">Buy</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </section>


            </section>
        </section>
    )
}