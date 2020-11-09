import App from '../../app'

const vods = App.Collection()(collection => ({
    primaryKey: 'vod_id',
    defaultGroup: true,
    groups: {
        live: collection.Group()
    }
}))

export default {
    vods
}