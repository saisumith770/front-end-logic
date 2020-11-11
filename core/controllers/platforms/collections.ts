import App from '../../app'

//store all your integrations
const integrations = App.Collection()(() => ({
    primaryKey: 'platform',
    defaultGroup: true
}))

export default {
    integrations
}