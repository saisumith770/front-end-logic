import Api from '../../api'

//connect to a platform 
async function connect(user_id: string, payload: { App: object }) {
    return (await Api.post(`app/connection/connect?user_id=${user_id}`, payload))
}

//disconnect from a platform
async function disconnect(user_id: string, platform: string) {
    return (await Api.post(`app/connection/disconnect?user_id=${user_id}&platform=${platform}`))
}

export default {
    connect,
    disconnect
}