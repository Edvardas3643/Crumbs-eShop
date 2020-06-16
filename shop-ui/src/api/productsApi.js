import axios from 'axios'

export default {
    fetchProducts(tag) {
        console.log(tag)
        return axios.get('http://localhost:8080/shopfront?tag=' + tag)
    },
}
