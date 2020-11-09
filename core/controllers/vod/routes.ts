import Api from '../../api'

async function getVods(user_id: string) {
    return (await Api.post(`app/vods?user_id=${user_id}`))
}

async function watch(payload: { vod_id: string, user_id: string }) {
    return (await Api.post(`app/watch`, payload))
}

async function create(payload: { vod_info: object, user_id: string }) {
    return (await Api.post(`app/create`, payload))
}

async function remove(payload: { vod_id: string, user_id: string }) {
    return (await Api.post(`app/delete`, payload))
}

export default {
    getVods,
    watch,
    create,
    remove
}