import Api from '../../api'

//return a json object with _csrf prop
async function csrf(access_token: string) {
    return (await Api.post('auth/crsf', { access_token })).data
}

//pass in information and login within 24hrs to prevent account deletion
async function register(payload: { username: string, password: string, email: string }) {
    return (await Api.post('auth/register', payload))
}

//login with email token or without
async function login(payload: { token?: string, username: string, password: string }) {
    if (payload.token) return (await Api.post(`login?token=${payload.token}`, payload))
    return (await Api.post('auth/login', payload))
}

//if valid refresh token is provided it sets the tokens in the cookies
async function revoke(refresh_token: string) {
    return (await Api.post('auth/oauth2/revoke', { refresh_token })).data
}

//retrieve totp secret and otpauth_url
async function totp() {
    return (await Api.get('auth/totp')).data
}

//provide a token and return an object with verified<boolean>
async function verifyTotp(payload: { secret: string, token: number }) {
    return (await Api.post('auth/totp/verify', payload)).data
}

export default {
    csrf,
    register,
    login,
    revoke,
    totp,
    verifyTotp
}