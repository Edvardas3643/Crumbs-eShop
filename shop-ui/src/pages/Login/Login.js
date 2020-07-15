import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {setCredentials} from "../../api";
import {AppContext, UserContext} from "../../App";
import userApi from "../../api/UserApi"
import {NavLink, useHistory, useLocation} from "react-router-dom"
import "./Login.css"
import loginBg from "../../../src/assets/img/login-bg.jpg"
import {useTranslation} from "react-i18next";
import * as Yup from 'yup';

const initialValues = {
    username: '',
    password: ''
}

export default () => {

    const {t} = useTranslation("login")

    const location = useLocation()
    const {prevPath} = location.state || {prevPath: '/'}
    const {setErrorNotification, clearErrorNotification} = useContext(AppContext)
    const {login, setUserData} = useContext(UserContext)
    const history = useHistory();

    const onSubmit = (values) => {
        setCredentials(values)
        userApi.getUser()
            .then(({data}) => {
                login(data)
                setUserData(data)
                clearErrorNotification()
                history.replace(prevPath)
            }).catch(e => {setErrorNotification({error: "Wrong login information"})})
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required(),
        password: Yup.string()
            .required()
    })

    return (
        <section className="container-wide">
            <section className="login-form-outer-container" style={{backgroundImage: "url(" + loginBg + ")"}}>
                <section className="login-form-inner-container">
                    <div className="login-form-inner-container-bg-left"/>
                    <div className="login-form-inner-container-bg-bottom"/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        validateOnMount={false}
                        validateOnBlur={false}
                        validateOnChange={false}
                        onSubmit={onSubmit}>
                        {({validateForm, errors}) => (
                            <Form className="login-form">

                                <p>{t("singIn")}</p>
                                <div>
                                    <Field className={errors.username ? "form-field field-error" : "form-field"} name="username" type="text"
                                           placeholder={t("username")}/>
                                </div>
                                <div>
                                    <Field className={errors.password ? "form-field field-error" : "form-field"} name="password" type="password"
                                           placeholder={t("password")}/>
                                </div>
                                <div>
                                    <button className="form-btn" onClick={() => {validateForm().then(p => setErrorNotification(p))}} type="submit">{t("login")}</button>
                                </div>
                                <div>
                                    <NavLink to="register" className="form-btn">{t("register")}</NavLink>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </section>
            </section>
        </section>
    )
}
