import HTTP from '.'

export default {
    getUser() {
        return HTTP.get('private/user')
    },

    newUser(values) {
        let userDTO = {
            username: values.username,
            password: values.password,
            passwordConfirmation: values.passwordConfirmation,
        }

        return HTTP.post('/newUser', userDTO)
    },
    setUserPaymentInfo(values) {
        let paymentInfo = {
            name: values.name,
            surname: values.surname,
            address: values.address,
            postCode: values.postCode,
            cardNumber: values.cardNumber
        }

        return HTTP.post('private/newPaymentInfo', paymentInfo)
    }
}