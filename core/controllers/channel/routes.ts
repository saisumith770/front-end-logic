import Api from '../../api'
import { creatorInfo } from './interface'

async function getSubscriptions(user_id: string) {
    return (await Api.get(`app/subscription?${user_id}`)).data
}

async function getViewers(user_id: string) {
    return (await Api.get(`app/subscription/viewers?${user_id}`)).data
}

async function subscribe(user_id: string, payload: { creator: creatorInfo, viewer_type: string }) {
    return (await Api.post(`app/subscription/subscribe?${user_id}`, payload))
}

async function unsubscribe(user_id: string, payload: { creator: creatorInfo }) {
    return (await Api.post(`app/subscription/unsubscribe?${user_id}`, payload))
}

export default {
    getSubscriptions,
    getViewers,
    subscribe,
    unsubscribe
}