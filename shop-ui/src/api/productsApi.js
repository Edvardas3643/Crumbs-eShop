import HTTP from '.'

export default {
    fetchProducts(tag) {
        return HTTP.get(`/shopfront?tag=` + tag)
    },

    createProduct(values, file) {
        console.log(values)
        let data = new FormData();
        data.append("file", file);
        data.append("title", values.title);
        data.append("price", values.price);
        data.append("description", values.description);
        data.append("ingredients", values.ingredients);
        data.append("tags", values.tags);
        return HTTP.post('/saveProduct', data);
    },

    getProduct(id) {
        return HTTP.get(`/product/` + id)
    },
    removeProduct(id) {
        return HTTP.get("/private/removeProduct?id=" + id)
    }
}
