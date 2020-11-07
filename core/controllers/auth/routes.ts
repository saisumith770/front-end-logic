import Api from '../../api'

async function csrf(username: string) {
    return (await Api.post('auth/crsf', { username })).data
}

async function register(payload: { username: string, password: string, email: string }) {
    return (await Api.post('auth/register', payload)).data
}

async function login(payload: { token?: string, username: string, password: string }) {
    if (payload.token) return (await Api.post(`login?token=${payload.token}`, payload)).data
    return (await Api.post('auth/login', payload)).data
}

async function revoke(refresh_token: string) {
    return (await Api.post('auth/oauth2/revoke', { refresh_token })).data
}

async function totp() {
    return (await Api.get('auth/totp')).data
}

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