import React, {useContext, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import productApi from "../../api/productsApi";
import "./Product.css"
import {AppContext} from "../../App";
import {useTranslation} from "react-i18next";
import DeleteProductBtn from "../../components/DeleteProductBtn/DeleteProductBtn";

export default () => {

    const {cart, setCart, setErrorNotification, clearErrorNotification} = useContext(AppContext)

    const {t} = useTranslation("product");

    const {id} = useParams()

    const [product, setProduct] = useState(null)

    const [descriptionClass, setDescriptionClass] = useState(true)

    const [ingredientsClass, setIngredientsClass] = useState(false)

    const [qty, setQty] = useState(1)

    useEffect(() => {
        productApi.getProduct(id)
            .then(response => {
                setProduct(response.data);
                clearErrorNotification();
            }).catch(e => setErrorNotification({error: "Server Error"}))
    }, [id])

    const addToQty = () => {
        setQty(qty + 1)
    }

    const minusFromQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const addToCart = () => {
        let newProduct = {
            product: product,
            qty: qty
        }

        if (cart != null) {
            let filteredCart = cart.filter((item) => item.product.id !== product.id)
            setCart([...filteredCart, newProduct])
        } else {
            setCart([newProduct])
        }
    }

    return (

        <section className="container-wide product-body">
            {product ?
                <>
                    <div className="product-img"
                         style={{backgroundImage: `url(http://localhost:8080/files/${product.img})`}}/>
                    <div className="product-content-container">
                        <div className="product-title">{product.title}</div>
                        <div className="product-price">{product.price}</div>
                        <div>
                            <div onClick={() => setDescriptionClass(!descriptionClass)}
                                 className="product-text-btn">{t("description")}</div>
                            <div
                                className={descriptionClass ? "product__description-text active" : "product__description-text"}>{product.description}</div>
                        </div>
                        <div className="product-qty-container">
                            <div>{t("qty")}</div>
                            <div className="qty-counter">
                                <div onClick={minusFromQty} className="fas fa-minus-circle"/>
                                <div>{qty}</div>
                                <div onClick={addToQty} className="fas fa-plus-circle"/>
                            </div>
                        </div>
                        <div className="product-btn-container">
                            <div onClick={addToCart} className="product-btn">{t("addToCart")}</div>
                            {cart != null ?
                                <NavLink to="/checkout" className="product-btn">{t("checkout")}</NavLink> : <></>}
                        </div>
                        <DeleteProductBtn id={product.id}/>
                        <div>
                            <div onClick={() => setIngredientsClass(!ingredientsClass)}
                                 className="product-text-btn">{t("ingredients")}</div>
                            <div
                                className={ingredientsClass ? "product__ingredients-text active" : "product__ingredients-text"}>{product.ingredients}</div>
                        </div>
                    </div>
                </> : <></>
            }
        </section>
    )

}