import React, {useEffect, useState} from "react";
import "./ShopFront.css"
import productApi from "../../api/productsApi";
import {useParams} from "react-router-dom";


export default () => {

    const {tag} = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        productApi.fetchProducts(tag)
            .then(response => setProducts(response.data))
    }, [tag])

    return (
        <div className="grid container-wide">
            {products.map(product => (
                <div className="grid-container" >
                    <div className="grid-container__info">
                        <h3 className="info__title">{product.title}</h3>
                        <p className="info__price">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// style={{backgroundImage: "url(../../assets/img/" + product.img + ")"}}



