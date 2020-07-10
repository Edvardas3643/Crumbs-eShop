import HTTP from '.'

export default {

    newOrder(values, cart, userData) {

        console.log(cart)
        console.log(values)
        console.log(userData)


        let data = new FormData();

        // data.append("name", values.name);
        // data.append("surname", values.surname);
        // data.append("address", values.address);
        // data.append("postCode", values.postCode);
        // data.append("cardNumber", values.cardNumber);

        data.append("username", userData.username);
        data.append("info", JSON.stringify(values));

        data.append("cart", JSON.stringify(cart));

        return HTTP.post('/private/newOrder', data);
    }
}