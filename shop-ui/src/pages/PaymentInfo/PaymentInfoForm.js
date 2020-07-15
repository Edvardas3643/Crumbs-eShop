import React, {useContext, useState} from "react";
import "./Payment.css"
import {Field, Form, Formik, yupToFormErrors} from "formik";
import loginBg from "../../assets/img/login-bg.jpg";
import {AppContext, UserContext} from "../../App";
import {useHistory, useLocation} from "react-router-dom"
import {useTranslation} from "react-i18next";
import UserApi from "../../api/UserApi";
import * as Yup from "yup";

export default () => {

    const {t} = useTranslation("PaymentInfo")
    const {userData, setUserData} = useContext(UserContext)
    const {setErrorNotification, clearErrorNotification} = useContext(AppContext)
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
        console.log("submit")
        UserApi.setUserPaymentInfo(values)
            .then(value => {
                userData.paymentInfo = value.data
                setUserData(userData)
                clearErrorNotification()
                history.replace(prevPath);
            }).catch(e => setErrorNotification({error: "Server Error"}));

    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required(),
        surname: Yup.string()
            .required(),
        address: Yup.string()
            .required(),
        postCode: Yup.string()
            .length(5)
            .required(),
        cardNumber: Yup.string()
            .length(8)
            .required(),
    })

    return (
        <section className="container-wide">
            <section className="payment-container" style={{backgroundImage: "url(" + loginBg + ")"}}>
                <section className="payment-form-inner-container">
                    <div className="payment-form-inner-container-bg-left"/>
                    <div className="payment-form-inner-container-bg-bottom"/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({errors}) => (
                            <Form className="login-form">
                                {setErrorNotification(errors)}
                                <p>
                                    {t("contactInfo")}
                                </p>

                                <div>
                                    <Field className={errors.name ? "form-field field-error" : "form-field"} name="name"
                                           type="text"
                                           placeholder={t("name")} errorClass="field-has-error"/>
                                </div>
                                <div>
                                    <Field className={errors.surname ? "form-field field-error" : "form-field"}
                                           name="surname" type="text"
                                           placeholder={t("surname")} errorClass="field-has-error"/>
                                </div>
                                <div>
                                    <Field className={errors.address ? "form-field field-error" : "form-field"}
                                           name="address" type="text"
                                           placeholder={t("address")} errorClass="field-has-error"/>
                                </div>
                                <div>
                                    <Field className={errors.postCode ? "form-field field-error" : "form-field"}
                                           name="postCode" type="text"
                                           placeholder={t("postCode")}/>
                                </div>
                                <div>
                                    <Field className={errors.cardNumber ? "form-field field-error" : "form-field"}
                                           name="cardNumber" type="text"
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