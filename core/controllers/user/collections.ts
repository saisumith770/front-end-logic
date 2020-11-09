import App from '../../app'

const subscribed = App.Collection()(collection => ({
    primaryKey: 'domain',
    defaultGroup: true,
    groups: {
        notifiers: collection.Group(),
        favourites: collection.Group(),
        blocked: collection.Group()
    }
}))

const viewers = App.Collection()(collection => ({
    primaryKey: 'domain',
    defaultGroup: true,
    groups: {
        prime: collection.Group(),
        general: collection.Group()
    }
}))

const feeds = App.Collection()(collection => ({
    primaryKey: 'feed_id',
    defaultGroup: true,
    groups: {
        vods: collection.Group(),
        liveNotification: collection.Group()
    }
}))

const integrations = App.Collection()(collection => ({
    primaryKey: 'platform',
    defaultGroup: true
}))

export default {
    subscribed,
    viewers,
    feeds,
    integrations
}