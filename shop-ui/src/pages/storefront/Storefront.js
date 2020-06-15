import React, {useEffect, useState} from "react"
import productApi from "../../api/ProductApi"

export default (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        productApi.fetchProducts(props.tags)
            .then(response => setProducts(response.data))
    }, [])

    return (
        <h2>{JSON.stringify(products)}</h2>
    )
}