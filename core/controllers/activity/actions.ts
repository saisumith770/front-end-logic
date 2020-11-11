import routes from './routes'
import states from './states'
import collections from './collections'

import { feed } from './interface'

//function to handle the inbox which is a collection of feeds
function getInbox(user_id: string, payload: { date: Date, feed_id: string }) {
    routes.inbox(user_id, payload)
        .then(data => {
            if (data.status === 200) {
                data.data.result.forEach((feed: {}) => {
                    collections.feeds.collect(feed)
                });
                states.feed_id.set(data.data.cursor)
            }
        })
}

//creating a new feed
function createFeed(user_id: string, username: string, payload: { feed: feed }) {
    routes.createFeed(user_id, username, payload)
        .then(data => {
            if (data.status === 200) collections.feeds.collect(payload.feed)
        })
}

export default {
    getInbox,
    createFeed
}