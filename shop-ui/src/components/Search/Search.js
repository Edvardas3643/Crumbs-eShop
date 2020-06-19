import React from "react";
import './Search.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useHistory} from "react-router-dom";

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
