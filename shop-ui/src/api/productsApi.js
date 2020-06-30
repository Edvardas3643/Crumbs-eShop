import axios from 'axios'

export default {
    fetchProducts(tag) {
        return axios.get(`http://localhost:8080/shopfront?tag=` + tag)
    },

    createProduct(values, file) {
        let data = new FormData();
        data.append("file", file);
        data.append("title", values.title);
        data.append("price", values.price);
        data.append("description", values.description);
        data.append("tags", values.tags);
        return axios.post('http://localhost:8080/saveProduct', data);
    },

    getProduct(id) {
        return axios.get(`http://localhost:8080/product/` + id)
    }

}
