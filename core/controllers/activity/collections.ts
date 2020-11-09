import App from '../../app'

const feeds = App.Collection()(collection => ({
    primaryKey: 'feed_id',
    defaultGroup: true,
    groups: {
        vods: collection.Group(),
        liveNotification: collection.Group()
    }
}))

export default {
    feeds
}