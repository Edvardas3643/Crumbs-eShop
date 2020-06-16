import React, {useEffect, useState} from "react";
import productApi from "../../api/productsApi";

export default ({tag}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        productApi.fetchProducts(tag)
            .then(response => setProducts(response.data))
    }, [tag])

    return(
        <div>
            <h1>{JSON.stringify(products)}</h1>
        </div>
    )
}



