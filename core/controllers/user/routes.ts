import Api from '../../api'

import { creatorInfo } from './interface'

async function info(payload: { username: string, info: object }) {
    return (await Api.post('app/user/info', payload))
}

async function update(payload: { user_id: string, data: object }) {
    return (await Api.post('app/user/update', payload))
}

async function inbox(user_id: string, payload: { date: Date, feed_id: string }) {
    return (await Api.post(`app/activity/inbox?user_id=${user_id}`, payload))
}

async function state(user_id: string, payload: { state: object }) {
    return (await Api.post(`app/activity/setState?user_id=${user_id}`, payload))
}

async function createFeed(user_id: string, username: string, payload: { feed: object }) {
    return (await Api.post(`app/activity/feed?user_id=${user_id}&username=${username}`, payload))
}

async function connect(user_id: string, payload: { App: object }) {
    return (await Api.post(`app/connection/connect?user_id=${user_id}`, payload))
}

async function disconnect(user_id: string, platform: string) {
    return (await Api.post(`app/connection/disconnect?user_id=${user_id}&platform=${platform}`))
}

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
    info,
    update,
    getSubscriptions,
    getViewers,
    subscribe,
    unsubscribe,
    inbox,
    state,
    createFeed,
    connect,
    disconnect
}