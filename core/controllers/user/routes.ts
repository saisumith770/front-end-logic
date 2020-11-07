import Api from '../../api'

async function info(payload: { username: string, info: object }) {
    return (await Api.post('app/user/info', payload))
}

async function update(payload: { user_id: string, data: object }) {
    return (await Api.post('app/user/update', payload))
}

async function getSubscriptions(user_id: string) {
    return (await Api.get(`app/subscription?${user_id}`)).data
}

async function getViewers(user_id: string) {
    return (await Api.get(`app/subscription/viewers?${user_id}`)).data
}

async function subscribe(user_id: string, payload: { creator: object, viewer_type: string }) {
    return (await Api.post(`app/subscription/subscribe?${user_id}`, payload))
}

async function unsubscribe(payload: { user_id: string, creator: object }) {
    return (await Api.post(`app/subscription/unsubscribe?${payload.user_id}`))
}

export default {
    info,
    update,
    getSubscriptions,
    getViewers,
    subscribe,
    unsubscribe
}