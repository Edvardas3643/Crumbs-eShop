import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {setCredentials} from "../../api";
import {UserContext} from "../../App";
import userApi from "../../api/UserApi"
import {useHistory} from "react-router-dom"
import "./Login.css"

const initialValues = {
    username: '',
    password: ''
}

export default () => {
    const {login} = useContext(UserContext)
    const history = useHistory();

    const onSubmit = values => {
        console.log(values)
        setCredentials(values)

        userApi.getUser()
            .then(({data}) => {
                login(data)
                history.push("/")
            })
    }

    return (
        <section className="container-wide login-form-outer-container">
            <section className="login-form-inner-container">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <Field name="username" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <Field name="password" type="password"/>
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </section>
        </section>
    )
}
