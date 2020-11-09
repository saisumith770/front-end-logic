import collections from './collections'
import routes from './routes'

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

function watch(payload: { vod_id: string, user_id: string }) {
    routes.watch(payload)
}

function create(payload: { vod_info: object, user_id: string }) {
    routes.create(payload)
        .then(data => {
            if (data.status === 200) {
                collections.vods.collect(payload.vod_info)
            }
        })
}

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