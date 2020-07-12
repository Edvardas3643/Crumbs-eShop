import HTTP from '.'

export default {
    getUser() {
        return HTTP.get('private/user')
    },

    fetchOrderHistory() {
        return HTTP.get('private/getOrderHistory')
    }
}