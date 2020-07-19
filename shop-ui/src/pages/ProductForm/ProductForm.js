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
    ingredients: '',
    price: '',
    tags: []
}

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required(),
    description: Yup.string()
        .required(),
    price: Yup.number()
        .typeError()
        .min(0.01)
        .required(),
    ingredients: Yup.string()
        .required(),
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
            <div className="form-container">
                <Formik
                    initialValues={initialState}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({errors, validateForm}) => (
                        <Form>
                            <div>
                                <Field className={errors.title ? "form-field field-error" : "form-field"} name="title"
                                       type="text" placeholder="title"/>
                            </div>
                            <div>
                                <Field className={errors.description ? "form-field field-error" : "form-field"}
                                       name="description" type="text" placeholder="description"/>
                            </div>
                            <div>
                                <Field className={errors.ingredients ? "form-field field-error" : "form-field"}
                                       name="ingredients" type="text"
                                       placeholder="ingredients"/>
                            </div>
                            <div>
                                <Field className={errors.price ? "form-field field-error" : "form-field"} name="price"
                                       type="text" placeholder="price"/>
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
                                <Field name="files" type="file" onChange={handleFileChange}/>
                            </div>
                            <div>
                                <input type="submit" className="form-btn" onClick={() => {validateForm().then(p => setErrorNotification(p))}} value="Create"/>
                            </div>
                        </Form>
                    )
                    }
                </Formik>
                <div className="image-preview" style={{backgroundImage: "url(" + previewImg + ")"}}/>
            </div>
        </section>
    )
}