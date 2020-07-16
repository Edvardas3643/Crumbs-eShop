import HTTP from '.'

export default {

    newOrder(orderHistoryDTO) {
        return HTTP.post('/private/newOrder', orderHistoryDTO);
    },

    fetchOrderHistory() {
        return HTTP.get('private/getOrderHistory')
    }
}