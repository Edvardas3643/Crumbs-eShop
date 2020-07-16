import React, {useEffect, useState} from "react";
import "./ShopFront.css"
import productApi from "../../api/productsApi";
import {NavLink, useParams} from "react-router-dom";


export default () => {

    const {tag} = useParams()

    const [products, setProducts] = useState([])

    const sessionProducts = sessionStorage.getItem(tag);

    const setLocaleProducts = (value) => {
        sessionStorage.setItem(tag, value)
    }

    useEffect(() => {
        if (sessionProducts != null) {
            setProducts(JSON.parse(sessionProducts));
        } else {
            productApi.fetchProducts(tag)
                .then(response => {
                    setProducts(response.data);
                    setLocaleProducts(JSON.stringify(response.data));
                })
        }
    }, [tag])

    return (
        <div className="grid container-wide">
            {products.map(product => {
                return (
                    <NavLink to={"/product/" + product.id} className="grid-container" key={product.id}
                             style={{backgroundImage: `url(http://localhost:8080/files/${product.img})`}}>
                        <div className="grid-container__info">
                            <h3 className="info__title">{product.title}</h3>
                            <p className="info__price">{product.price}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

