import HTTP from '.';

export default {
    fetchProducts(tag) {
        return HTTP.get(`/shopfront?tag=` + tag)
    },

    createProduct(values, file) {
        let data = new FormData();
        data.append("file", file);
        data.append("title", values.title);
        data.append("price", values.price);
        data.append("description", values.description);
        data.append("tags", values.tags);
        return HTTP.post('/private/saveProduct', data);
    },

    getProduct(id) {
        return HTTP.get(`/product/` + id)
    },


    getImage(imgName) {
        return HTTP.get('/files/' + imgName)
    }
}
