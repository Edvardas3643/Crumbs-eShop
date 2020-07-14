import React, {useContext} from "react";
import "./Payment.css"
import {Field, Form, Formik} from "formik";
import loginBg from "../../assets/img/login-bg.jpg";
import {UserContext} from "../../App";
import {useHistory, useLocation} from "react-router-dom"
import {useTranslation} from "react-i18next";
import UserApi from "../../api/UserApi";

export default () => {

    const {t} = useTranslation("PaymentInfo")
    const {userData, setUserData} = useContext(UserContext)
    const location = useLocation();
    const {prevPath} = location.state || {from: {pathname: '/'}}
    const history = useHistory();
    const initialValues = {
        name: userData.paymentInfo.name || '',
        surname: userData.paymentInfo.surname || '',
        address: userData.paymentInfo.address || '',
        postCode: userData.paymentInfo.postCode || '',
        cardNumber: userData.paymentInfo.cardNumber || '',
    }

    const onSubmit = (values) => {
        UserApi.setUserPaymentInfo(values)
            .then(value => userData.paymentInfo = value.data);
        setUserData(userData)
        history.replace(prevPath);
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
                        {(errors) => (
                            <Form className="login-form">

                                <p>
                                    {t("contactInfo")}
                                </p>

                                <div>
                                    <Field className="form-field" name="name" type="text" placeholder={t("name")}/>
                                </div>
                                <div>
                                    <Field className="form-field" name="surname" type="text"
                                           placeholder={t("surname")}/>
                                </div>
                                <div>
                                    <Field className="form-field" name="address" type="text"
                                           placeholder={t("address")}/>
                                </div>
                                <div>
                                    <Field className="form-field" name="postCode" type="text"
                                           placeholder={t("postCode")}/>
                                </div>
                                <div>
                                    <Field className="form-field" name="cardNumber" type="text"
                                           placeholder={t("cardNumber")}/>
                                </div>
                                <div>
                                    <button className="form-btn" type="submit">{t("save")}</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </section>
            </section>
        </section>
    )
}