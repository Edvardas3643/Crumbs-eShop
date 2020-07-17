import React, {useContext, useState} from "react";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import productsApi from '../../api/productsApi';
import ErrorMessageTranslated from "../../components/ErrorMessageTranslated/ErrorMessageTranslated";
import "./ProductForm.css"
import {useHistory} from "react-router-dom";
import {AppContext} from "../../App";

const initialState = {
    title: '',
    description: '',
    price: '',
    tags: []
}

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .label("common:title")
        .required(),
    description: Yup.string()
        .label("common:description")
        .required(),
    price: Yup.number()
        .label("common:price")
        .typeError()
        .min(0.01)
        .required()
})

export default () => {

    const {setErrorNotification, clearErrorNotification} = useContext(AppContext)

    const history = useHistory();
    const [previewImg, setPreviewImg] = useState()
    const [file, setFile] = useState({});

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        const currentFile = e.target.files[0];
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            setPreviewImg(reader.result);
        }, false)
        reader.readAsDataURL(currentFile)
    }

    const onSubmit = (values) => {
        productsApi.createProduct(values, file).then(({data}) => {
            history.push(`/product/${data.id}`)
            clearErrorNotification();
        }).catch(() => setErrorNotification({error: "Server Error"}))
        ;

    }

    return (
        <section className="container-wide flex-center product-form-container">
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({errors, validateForm}) => (
                    <Form>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <Field name="title" type="text"/>
                            <ErrorMessageTranslated className="error" name="title"/>
                        </div>
                        <div className="form__description">
                            <label htmlFor="description">Description:</label>
                            <Field name="description" type="text"/>
                            <ErrorMessageTranslated className="error" name="description"/>
                        </div>
                        <div>
                            <label htmlFor="price">Price:</label>
                            <Field name="price" type="text"/>
                            <ErrorMessageTranslated className="error" name="price"/>
                        </div>

                        <div className="checkbox-container">
                            <div className="checkbox-container__content">
                                <label htmlFor="cakeTag">Cake: </label>
                                <Field type="checkbox" name="tags" value="cake"/>
                                <ErrorMessage name="cakeTag"/>
                            </div>
                            <div className="checkbox-container__content">
                                <label htmlFor="kitTag">Kits: </label>
                                <Field type="checkbox" name="tags" value="kit"/>
                                <ErrorMessage name="kitTag"/>
                            </div>
                            <div className="checkbox-container__content">
                                <label htmlFor="muffinTag">Muffins: </label>
                                <Field type="checkbox" name="tags" value="muffin"/>
                                <ErrorMessage name="muffinTag"/>
                            </div>
                            <div className="checkbox-container__content">
                                <label htmlFor="cookiesTag">Cookies: </label>
                                <Field type="checkbox" name="tags" value="cookie"/>
                                <ErrorMessage name="cookiesTag"/>
                            </div>
                            <div className="checkbox-container__content">
                                <label htmlFor="browniesTag">Brownies: </label>
                                <Field type="checkbox" name="tags" value="brownie"/>
                                <ErrorMessage name="browniesTag"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="file">File:</label>
                            <Field name="files" type="file" onChange={handleFileChange}/>
                        </div>
                        <div>
                            <input type="submit" onClick={() => {
                                validateForm().then(p => setErrorNotification(p))
                            }} value="Create"/>
                        </div>
                    </Form>
                )
                }
            </Formik>
            <div className="image-preview" style={{backgroundImage: "url(" + previewImg + ")"}}/>
        </section>
    )
}