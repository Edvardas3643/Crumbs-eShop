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
    }
}