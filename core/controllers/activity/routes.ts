import Api from '../../api'

import { feed } from './interface'

async function inbox(user_id: string, payload: { date: Date, feed_id: string }) {
    return (await Api.post(`app/activity/inbox?user_id=${user_id}`, payload))
}

async function createFeed(user_id: string, username: string, payload: { feed: feed }) {
    return (await Api.post(`app/activity/feed?user_id=${user_id}&username=${username}`, payload))
}

export default {
    inbox,
    createFeed
}