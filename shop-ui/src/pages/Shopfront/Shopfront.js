import React, {useEffect, useState} from "react";
import "./ShopFront.css"
import productApi from "../../api/productsApi";
import {NavLink, useParams} from "react-router-dom";
import noResultsBanner from "../../assets/img/search-noresults.jpg"
import resultsBanner from "../../assets/img/banner-search.jpg"
import cupcakesBanner from "../../assets/img/cupcakes-banner.jpg"
import cakesBanner from "../../assets/img/Cakes_banner.jpg"
import kitsBanner from "../../assets/img/kits-banner.jpg"

export default () => {

    const {tag} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        productApi.fetchProducts(tag)
            .then(response => {
                setProducts(response.data);
            })
    }, [tag])

    let bannerContents = <div className="banner-contents">{tag}</div>

    const bannerHandler = () => {
        if (tag.toLowerCase().includes("cakes")) {
            return cakesBanner
        } else if (tag.toLowerCase().includes("kit")) {
            return kitsBanner;
        } else if (tag.toLowerCase().includes("muffin")) {
            return cupcakesBanner
        } else if (products.length > 0) {
            return resultsBanner
        } else {
            bannerContents = <div className="banner-contents">No Results Found For<br/> {tag}</div>
            return noResultsBanner
        }
    }

    return (
        <section>
            <section className={"banner"} style={{backgroundImage: `url(${bannerHandler()})`}}>
                {bannerContents}
            </section>
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
        </section>

    )
}

