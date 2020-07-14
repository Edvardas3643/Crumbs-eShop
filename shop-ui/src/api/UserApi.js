import HTTP from '.'
import {Form} from "formik";

export default {
    getUser() {
        return HTTP.get('private/user')
    },


    newUser(values) {
        let data = new FormData();
        data.append("username", values.username)
        data.append("password", values.password)
        return HTTP.post('/newUser', data)
    },
    setUserPaymentInfo(values) {
        let data = new FormData();
        data.append("name", values.name)
        data.append("surname", values.surname)
        data.append("address", values.address)
        data.append("postCode", values.postCode)
        data.append("cardNumber", values.cardNumber)

        return HTTP.post('private/newPaymentInfo', data)
    }
}