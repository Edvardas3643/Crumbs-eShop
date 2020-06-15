import axios from 'axios'

export default {
    fetchProducts(props) {
        return axios.get('http://localhost:8080/shopfront?tag=')
    }
}

