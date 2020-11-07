import App from '../../app'

const subscribed = App.Collection()(collection => ({
    primaryKey: 'id',
    defaultGroup: true,
    groups: {
        notifiers: collection.Group(),
        favourites: collection.Group(),
        blocked: collection.Group()
    }
}))

const viewers = App.Collection()(collection => ({
    primaryKey: 'id',
    defaultGroup: true,
    groups: {
        prime: collection.Group(),
        general: collection.Group()
    }
}))

export default {
    subscribed,
    viewers
}