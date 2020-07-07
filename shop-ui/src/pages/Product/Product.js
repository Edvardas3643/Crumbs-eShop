import React, {useContext, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import productApi from "../../api/productsApi";
import "./Product.css"
import {AppContext} from "../../App";

export default () => {

    const {cart, setCart} = useContext(AppContext)

    const {id} = useParams()

    const [product, setProduct] = useState({})

    const [descriptionClass, setDescriptionClass] = useState("product__description-text active")

    const [ingredientsClass, setIngredientsClass] = useState("product__ingredients-text")

    const [qty, setQty] = useState(1)

    useEffect(() => {
        productApi.getProduct(id)
            .then(response => {
                setProduct(response.data);
            })
    }, [id])

    const changDisplayTypeForDescription = () => {
        if (descriptionClass.includes("active")) {
            setDescriptionClass("product__description-text")
        } else {
            setDescriptionClass("product__description-text active")
        }
    }

    const changDisplayTypeForIngredients = () => {
        if (ingredientsClass.includes("active")) {
            setIngredientsClass("product__ingredients-text")
        } else {
            setIngredientsClass("product__ingredients-text active")
        }
    }

    const addToQty = () => {
        setQty(qty + 1)
    }

    const minusFromQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const addToCart = () => {

        let obj = {
            product: product,
            qty: qty
        }

        let filteredCart = cart.filter((item) => item.product.id !== product.id)

        setCart(() => [...filteredCart, obj])
    }

    return (
        <section className="container-wide product-body">
            <div className="product-img" style={{backgroundImage: `url(http://localhost:8080/files/${product.img})`}}/>
            <div className="product-content-container">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.price}</div>
                <div>
                    <div onClick={changDisplayTypeForDescription} className="product-text-btn">Description</div>
                    <div className={descriptionClass}>{product.description == null ?
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, dolor ut mattis sollicitudin, elit nulla finibus dui," +
                        " ac posuere erat justo quis mi. Sed scelerisque finibus erat, eget condimentum nunc dignissim id. Nullam urna magna," +
                        " lobortis viverra ante quis, fermentum feugiat est. Mauris posuere, eros sit amet mattis efficitur, arcu mi rutrum justo," +
                        " non efficitur lacus orci ac tortor. Aliquam sollicitudin, diam nec auctor cursus, massa turpis cursus lectus, id lacinia odio quam nec nunc." +
                        " Morbi accumsan erat turpis, sagittis commodo urna rhoncus ullamcorper. Nulla non efficitur sem. Donec dignissim velit nec purus hendrerit maximus." +
                        " Morbi molestie mauris sed imperdiet ornare. Suspendisse elementum tellus eu laoreet bibendum."
                        : product.description}</div>
                </div>
                <div className="product-qty-container">
                    <div>Qty</div>
                    <div className="qty-counter">
                        <div onClick={minusFromQty} className="fas fa-minus-circle"/>
                        <div>{qty}</div>
                        <div onClick={addToQty} className="fas fa-plus-circle"/>
                    </div>
                </div>
                <div className="product-btn-container">
                    <div onClick={addToCart} className="product-btn">Add to Cart</div>
                    <NavLink to="/checkout" className="product-btn">Checkout</NavLink>
                </div>

                <div>
                    <div onClick={changDisplayTypeForIngredients} className="product-text-btn">Ingredients</div>
                    <div className={ingredientsClass}>{product.ingredients == null ?
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, dolor ut mattis sollicitudin, elit nulla finibus dui," +
                        " ac posuere erat justo quis mi. Sed scelerisque finibus erat, eget condimentum nunc dignissim id. Nullam urna magna," +
                        " lobortis viverra ante quis, fermentum feugiat est. Mauris posuere, eros sit amet mattis efficitur, arcu mi rutrum justo," +
                        " non efficitur lacus orci ac tortor. Aliquam sollicitudin, diam nec auctor cursus, massa turpis cursus lectus, id lacinia odio quam nec nunc." +
                        " Morbi accumsan erat turpis, sagittis commodo urna rhoncus ullamcorper. Nulla non efficitur sem. Donec dignissim velit nec purus hendrerit maximus." +
                        " Morbi molestie mauris sed imperdiet ornare. Suspendisse elementum tellus eu laoreet bibendum."
                        : product.ingredients}</div>
                </div>
            </div>
        </section>
    )

}