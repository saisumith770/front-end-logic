import Api from '../../api'

//get all the vods
async function getVods(user_id: string) {
    return (await Api.post(`app/vods?user_id=${user_id}`))
}

//watch a specific vod
async function watch(payload: { vod_id: string, user_id: string }) {
    return (await Api.post(`app/watch`, payload))
}

//create a new vod
async function create(payload: { vod_info: object, user_id: string }) {
    return (await Api.post(`app/create`, payload))
}

//remove a vod
async function remove(payload: { vod_id: string, user_id: string }) {
    return (await Api.post(`app/delete`, payload))
}

export default {
    getVods,
    watch,
    create,
    remove
}