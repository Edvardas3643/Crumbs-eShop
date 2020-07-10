import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {setCredentials} from "../../api";
import {UserContext} from "../../App";
import userApi from "../../api/UserApi"
import {useHistory} from "react-router-dom"
import "./Login.css"
import loginBg from "../../../src/assets/img/login-bg.jpg"

const initialValues = {
    username: '',
    password: ''
}

export default () => {
    const {login} = useContext(UserContext)
    const history = useHistory();

    const onSubmit = values => {
        setCredentials(values)

        userApi.getUser()
            .then(({data}) => {
                login(data)
                history.push("/")
            })
    }

    return (
        <section className="container-wide">
            <section className="login-form-outer-container" style={{backgroundImage: "url(" + loginBg + ")"}}>
                <section className="login-form-inner-container">
                    <div className="login-form-inner-container-bg-left"/>
                    <div className="login-form-inner-container-bg-bottom"/>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                        {(props) => (
                            <Form className="login-form">
                                <p>SIGN IN</p>
                                <div>
                                    <Field className="form-field" name="username" type="text" placeholder="Email"/>
                                </div>
                                <div>
                                    <Field className="form-field" name="password" type="password"
                                           placeholder="Password"/>
                                </div>
                                <div>
                                    <button className="form-btn" type="submit">Login</button>
                                </div>
                                <div>
                                    <div className="form-btn">No Account ? Create An Account Here</div>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </section>
            </section>
        </section>
    )
}
