import routes from './routes'
import states from './states'
import collections from './collections'

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

function subscribed(user_id: string) {
    routes.getSubscriptions(user_id)
        .then(data => {
            data.creators.forEach((creator: { type: string, [key: string]: string }, index: number) => {
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
            data.viewers.forEach((viewer: { type: string, [key: string]: string }, index: number) => {
                var { domain, username, photo } = viewer
                collections.viewers.collect({
                    domain,
                    username,
                    photo
                }, viewer.type)
            });
        })
}

function subscribe(user_id: string, payload: { creator: object, viewer_type: string }) {
    routes.subscribe(user_id, payload)
        .then(data => {
            if (data.status === 200) collections.subscribed.collect(payload.creator, 'notifiers')
            else console.log('err')
        })
}

function unsubscribe(payload: { user_id: string, creator: { domain: string } }) {
    routes.unsubscribe(payload)
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
    unsubscribe
}