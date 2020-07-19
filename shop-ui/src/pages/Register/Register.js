import React, {useContext} from "react";
import "./Register.css"
import loginBg from "../../assets/img/login-bg.jpg";
import {Field, Form, Formik} from "formik";
import UserApi from "../../api/UserApi";
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";

export default () => {

    const {t} = useTranslation("register")

    const history = useHistory();

    const {setErrorNotification, clearErrorNotification, setApiErrorNotification} = useContext(AppContext)

    const initialValues = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    // const validationSchema = Yup.object({
    //     username: Yup.string()
    //         .min(6)
    //         .max(24)
    //         .required("Username is required"),
    //     password: Yup.string()
    //         .min(6)
    //         .max(24)
    //         .required('Password is required'),
    //     passwordConfirmation: Yup.string()
    //         .oneOf([Yup.ref('password'), null], 'Passwords must match')
    // });

    const onSubmit = values => {
        UserApi.newUser(values).then(({data}) => {
            clearErrorNotification();
            history.push("/")
        }).catch(e => {
            setApiErrorNotification(e.response)
        });
    }

    return (
        <section className="container-wide">
            <section className="registration-container">
                <section className="container-wide">
                    <section className="login-form-outer-container" style={{backgroundImage: "url(" + loginBg + ")"}}>
                        <section className="login-form-inner-container">
                            <div className="login-form-inner-container-bg-left"/>
                            <div className="login-form-inner-container-bg-bottom"/>
                            <Formik
                                // validationSchema={validationSchema}
                                validateOnMount={false}
                                validateOnBlur={false}
                                validateOnChange={false}
                                initialValues={initialValues}
                                onSubmit={onSubmit}>
                                {({errors, validateForm}) => (
                                    <Form className="login-form">
                                        <p>{t("singUp")}</p>
                                        <div>
                                            <Field className={errors.username ? "form-field field-error" : "form-field"} name="username" type="text"
                                                   placeholder={t("username")}/>
                                        </div>
                                        <div>
                                            <Field className={errors.password ? "form-field field-error" : "form-field"} name="password" type="password"
                                                   placeholder={t("password")}/>
                                        </div>
                                        <div>
                                            <Field className={errors.passwordConfirmation ? "form-field field-error" : "form-field"} name="passwordConfirmation" type="password"
                                                   placeholder={t("password")}/>
                                        </div>
                                        <div>
                                            <button className="form-btn" onClick={() => {validateForm().then(p => setErrorNotification(p))}} type="submit">{t("register")}</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}