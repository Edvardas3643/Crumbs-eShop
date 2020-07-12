import React, {useContext} from "react";
import './Search.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useHistory} from "react-router-dom";
import productApi from "../../api/productsApi";
import {AppContext} from "../../App";

export default () => {

    const {searchBlock} = useContext(AppContext)
    const history = useHistory();

    return (
        <div className={searchBlock ? "search-bar open" : "search-bar"}>
            <Formik
                initialValues={{tag: ''}}
                validationSchema={Yup.object().shape({
                    tag: Yup.string()
                })}
                onSubmit={values => {
                    productApi.fetchProducts(values.tag)
                        .then(response => localStorage.setItem('searchResult', response.data))
                    history.push("/shopfront/" + values.tag);

                }}
            >{() => (
                <Form>
                    <Field className="search-field" type="text" name="tag"/>
                    <ErrorMessage className="error" name="tag" component="div"/>
                </Form>
            )}
            </Formik>
        </div>
    )
}
