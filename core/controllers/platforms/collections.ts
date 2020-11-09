import App from '../../app'

const integrations = App.Collection()(collection => ({
    primaryKey: 'platform',
    defaultGroup: true
}))

export default {
    integrations
}