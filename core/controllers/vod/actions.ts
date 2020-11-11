import collections from './collections'
import routes from './routes'

//get all vods and store them in a collection
function getVods(user_id: string) {
    routes.getVods(user_id)
        .then(data => {
            if (data.status === 200) {
                data.data.forEach((vod: any) => {
                    collections.vods.collect(vod)
                });
            }
        })
}

//watch a vod 
function watch(payload: { vod_id: string, user_id: string }) {
    routes.watch(payload)
}

//create a vod and add it to the collection
function create(payload: { vod_info: object, user_id: string }) {
    routes.create(payload)
        .then(data => {
            if (data.status === 200) {
                collections.vods.collect(payload.vod_info)
            }
        })
}

//remove the vod and update the collection
function remove(payload: { vod_id: string, user_id: string }) {
    routes.remove(payload)
        .then(data => {
            if (data.status === 200) {
                collections.vods.remove(payload.vod_id)
            }
        })
}

export default {
    getVods,
    watch,
    create,
    remove
}