import React from "react";
import "./Register.css"
import loginBg from "../../assets/img/login-bg.jpg";
import {Field, Form, Formik, validateYupSchema} from "formik";
import UserApi from "../../api/UserApi";
import * as Yup from 'yup';

export default () => {

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
                                        <p>SIGN UP</p>
                                        <div>
                                            <Field className="form-field" name="username" type="text" placeholder="Username"/>
                                        </div>
                                        <div>
                                            <Field className="form-field" name="password" type="password"
                                                   placeholder="Password"/>
                                        </div>
                                        <div>
                                            <Field className="form-field" name="passwordConfirmation" type="password"
                                                   placeholder="Password"/>
                                        </div>
                                        <div>
                                            <button className="form-btn" type="submit">New Account</button>
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