import HTTP from '.'

export default {

    newOrder(values, cart, userData) {

        let data = new FormData();
        data.append("username", userData.username);
        data.append("info", JSON.stringify(values));

        data.append("cart", JSON.stringify(cart));

        return HTTP.post('/private/newOrder', data);
    },

    fetchOrderHistory() {
        return HTTP.get('private/getOrderHistory')
    }
}