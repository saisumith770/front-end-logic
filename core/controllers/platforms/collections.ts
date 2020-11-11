import App from '../../app'

//store all your integrations
const integrations = App.Collection()(collection => ({
    primaryKey: 'platform',
    defaultGroup: true
}))

export default {
    integrations
}