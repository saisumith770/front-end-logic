import App from '../../app'

//feed collection to store arrays of feeds
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