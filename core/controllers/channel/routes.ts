import Api from '../../api'

async function inbox(user_id: string) {
    return (await Api.get(`app/activity/inbox?user_id=${user_id}`))
}

async function createFeed(feed: object, user_id: string, username: string) {
    return (await Api.post(`app/activity/feed?user_id=${user_id}&username=${username}`, feed))
}

export default {
    inbox,
    createFeed
}