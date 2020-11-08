import routes from './routes'
import states from './states'
import collections from './collections'

import { creatorInfo, userPayload } from './interface'

function info(payload: { username: string, info: object }) {
    routes.info(payload)
        .then(data => {
            if (data.status === 200) states.user.set(data.data)
            else console.log('err')
        })
}

function update(payload: { user_id: string, data: object }) {
    routes.update(payload)
        .then(data => {
            if (data.status) states.user.patch(data.data)
            else console.log('err')
        })
}

function getInbox(user_id: string, payload: { date: Date, feed_id: string }) {
    routes.inbox(user_id, payload)
}

function updateState(user_id: string, payload: { state: object }) {
    routes.state(user_id, payload)
}

function createFeed(user_id: string, username: string, payload: { feed: object }) {
    routes.createFeed(user_id, username, payload)
}

function connect(user_id: string, payload: { App: object }) {
    routes.connect(user_id, payload)
}

function disconnect(user_id: string, platform: string) {
    routes.disconnect(user_id, platform)
}

function subscribed(user_id: string) {
    routes.getSubscriptions(user_id)
        .then(data => {
            data.creators.forEach((creator: userPayload) => {
                var { domain, username, photo } = creator
                collections.subscribed.collect({
                    domain,
                    username,
                    photo
                }, creator.type)
            });
        })
}

function viewers(user_id: string) {
    routes.getSubscriptions(user_id)
        .then(data => {
            data.viewers.forEach((viewer: userPayload) => {
                var { domain, username, photo } = viewer
                collections.viewers.collect({
                    domain,
                    username,
                    photo
                }, viewer.type)
            });
        })
}

function subscribe(user_id: string, payload: { creator: creatorInfo, viewer_type: string }) {
    routes.subscribe(user_id, payload)
        .then(data => {
            if (data.status === 200) collections.subscribed.collect(payload.creator, 'notifiers')
            else console.log('err')
        })
}

function unsubscribe(user_id: string, payload: { creator: creatorInfo }) {
    routes.unsubscribe(user_id, payload)
        .then(data => {
            if (data.status === 200) collections.subscribed.remove(payload.creator.domain)
            else console.log('err')
        })
}

export default {
    info,
    update,
    subscribed,
    viewers,
    subscribe,
    unsubscribe,
    getInbox,
    updateState,
    createFeed,
    connect,
    disconnect
}