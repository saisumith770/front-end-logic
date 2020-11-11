import routes from './routes'
import collections from './collections'

//connect to a platform and add it to the integrations
function connect(user_id: string, payload: { App: object }) {
    routes.connect(user_id, payload)
        .then(data => {
            if (data.status === 200) collections.integrations.collect(payload.App)
        })
}

//disconnect from a platform and remove it from the collection
function disconnect(user_id: string, platform: string) {
    routes.disconnect(user_id, platform)
        .then(data => {
            if (data.status === 200) collections.integrations.remove(platform)
        })
}

export default {
    connect,
    disconnect
}