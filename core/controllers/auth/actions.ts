import App from '../../app'

import routes from './routes'
import states from './states'

import userStates from '../user/states'

import { LoginError } from '../../Errors/loginError'
import { RegistrationError } from '../../Errors/registrationError'

//funciton to handle the csrf tokens
function csrf(access_token: string) {
    routes.csrf(access_token)
        .then(data => {
            states.csrf_token.set(data._csrf)
        })
}

//login function that sets the user states
function login(payload: { token?: string, username: string, password: string }) {
    routes.login(payload)
        .then(data => {
            if (data.status === 404) App.Error(new LoginError(), 'login error') //custom error
            else {
                delete data.data.status
                delete data.data.type
                states.loggedIn.set(true)
                states.emailVerification.set(true)
                userStates.user.set(data.data)
            }
        })
}

//register function which requires login within 24hrs
function register(payload: { username: string, password: string, email: string }) {
    routes.register(payload)
        .then(data => {
            if (data.status === 400) App.Error(new RegistrationError(), 'registration error') //custom error
            else {
                delete data.data.status
                userStates.user.set(data.data)
            }
        })
}

//set the totp secret and auth url
function totp() {
    routes.totp()
        .then(data => {
            states.otp_secret.set(data.secret)
            states.otp_url.set(data.otpauth_url)
        })
}

//returns a boolean 
async function verifyTotp(token: number) {
    return (await routes.verifyTotp({ secret: states.otp_secret.value, token })).data.verified
}

export default {
    csrf,
    login,
    register,
    totp,
    verifyTotp
}