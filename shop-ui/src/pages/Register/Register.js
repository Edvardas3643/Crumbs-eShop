import React from "react";
import "./Register.css"
import loginBg from "../../assets/img/login-bg.jpg";
import {Field, Form, Formik} from "formik";
import UserApi from "../../api/UserApi";
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";

export default () => {

    const {t} = useTranslation("register")

    const initialValues = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const onSubmit = values => {
        UserApi.newUser(values)
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
                                validationSchema={validationSchema}
                                initialValues={initialValues}
                                onSubmit={onSubmit}>
                                {(props) => (
                                    <Form className="login-form">
                                        <p>{t("singUp")}</p>
                                        <div>
                                            <Field className="form-field" name="username" type="text"
                                                   placeholder={t("username")}/>
                                        </div>
                                        <div>
                                            <Field className="form-field" name="password" type="password"
                                                   placeholder={t("password")}/>
                                        </div>
                                        <div>
                                            <Field className="form-field" name="passwordConfirmation" type="password"
                                                   placeholder={t("password")}/>
                                        </div>
                                        <div>
                                            <button className="form-btn" type="submit">{t("register")}</button>
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