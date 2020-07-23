import React, {useContext} from "react";
import "./Payment.css"
import {Field, Form, Formik} from "formik";
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
        UserApi.setUserPaymentInfo(values)
            .then(value => {
                userData.paymentInfo = value.data
                setUserData(userData)
                clearErrorNotification()
                history.replace(prevPath);
            }).catch(e => {
            setErrorNotification({error: "Internal Server Error"})
        });

    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is Required"),
        surname: Yup.string()
            .required("Surname is Required"),
        address: Yup.string()
            .required("Address is Required"),
        postCode: Yup.string()
            .length(5, "Post Code length must be 5")
            .required("Post Code is Required"),
        cardNumber: Yup.string()
            .length(8, "Post Code length must be 8")
            .required("Card Number is Required"),
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
                        {({errors, validateForm}) => (
                            <Form className="login-form">
                                <p>
                                    {t("contactInfo")}
                                </p>

                                <div>
                                    <Field className={errors.name ? "form-field field-error" : "form-field"} name="name"
                                           type="text"
                                           placeholder={t("name")}/>
                                </div>
                                <div>
                                    <Field className={errors.surname ? "form-field field-error" : "form-field"}
                                           name="surname" type="text"
                                           placeholder={t("surname")}/>
                                </div>
                                <div>
                                    <Field className={errors.address ? "form-field field-error" : "form-field"}
                                           name="address" type="text"
                                           placeholder={t("address")}/>
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
                                    <button className="form-btn" onClick={() => {
                                        validateForm().then(p => setErrorNotification(p))
                                    }} type="submit">{t("save")}</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </section>
            </section>

        </section>
    )
}