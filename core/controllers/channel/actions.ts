import routes from './routes'
import collections from './collections'
import { userPayload, creatorInfo } from './interface'

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
    subscribed,
    viewers,
    subscribe,
    unsubscribe
}