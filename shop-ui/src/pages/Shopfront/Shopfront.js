import React, {useEffect, useState} from "react";
import productApi from "../../api/productsApi";
import { useParams } from "react-router-dom";

export default () => {

    const {tag} = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        productApi.fetchProducts(tag)
            .then(response => setProducts(response.data))
    }, [tag])

    return (
        <div>
            <h1>{JSON.stringify(products)}</h1>
        </div>
    )
}



