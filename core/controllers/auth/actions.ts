import App from '../../app'

import routes from './routes'
import states from './states'

import userStates from '../user/states'

function csrf(username: string) {
    routes.csrf(username)
        .then(data => {
            states.csrf_token.set(data._csrf)
        })
}

function login(payload: { token?: string, username: string, password: string }) {
    routes.login(payload)
        .then(data => {
            if (data.status === "login error") App.Error('build a login error class', 'login error')
            else {
                delete data.status
                delete data.type
                states.loggedIn.set(true)
                states.emailVerification.set(true)
                userStates.user.set(data)
            }
        })
}

function register(payload: { username: string, password: string, email: string }) {
    routes.register(payload)
        .then(data => {
            if (data.status === "registration error") App.Error('build a registration error class', 'registration error')
            else {
                delete data.status
                userStates.user.set(data)
            }
        })
}

function totp() {
    routes.totp()
        .then(data => {
            states.otp_secret.set(data.secret)
            states.otp_url.set(data.otpauth_url)
        })
}

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