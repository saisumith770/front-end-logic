import Api from '../../api'
import { creatorInfo } from './interface'

//array of creators
async function getSubscriptions(user_id: string) {
    return (await Api.get(`app/subscription?${user_id}`)).data
}

//array of viewers
async function getViewers(user_id: string) {
    return (await Api.get(`app/subscription/viewers?${user_id}`)).data
}

//subscribe to a creator
async function subscribe(user_id: string, payload: { creator: creatorInfo, viewer_type: string }) {
    return (await Api.post(`app/subscription/subscribe?${user_id}`, payload))
}

//unsubscribe from a creator
async function unsubscribe(user_id: string, payload: { creator: creatorInfo }) {
    return (await Api.post(`app/subscription/unsubscribe?${user_id}`, payload))
}

export default {
    getSubscriptions,
    getViewers,
    subscribe,
    unsubscribe
}