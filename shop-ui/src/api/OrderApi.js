import HTTP from '.'

export default {

    newOrder({info, user, cart}) {

        return HTTP.get('private/newOrder')
        let data = new FormData();

        data.append("order", values.title);

        return HTTP.post('/private/saveProduct', data);
    }
}