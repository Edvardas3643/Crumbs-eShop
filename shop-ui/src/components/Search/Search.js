import React from "react";
import './Search.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useHistory} from "react-router-dom";
import productApi from "../../api/productsApi";

export default (props) => {

    const history = useHistory();

    let searchClasses = "search-bar";

    if (props.show) {
        searchClasses = "search-bar open";
    }


    return (
        <div className={searchClasses}>
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
