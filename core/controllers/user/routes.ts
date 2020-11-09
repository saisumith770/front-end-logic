import Api from '../../api'

import { user_data } from './interface'

async function info(payload: { domain: string, info: user_data }) {
    return (await Api.post('app/user/info', payload))
}

async function update(payload: { user_id: string, data: user_data }) {
    return (await Api.post('app/user/update', payload))
}

async function state(user_id: string, payload: { state: object }) {
    return (await Api.post(`app/activity/setState?user_id=${user_id}`, payload))
}

export default {
    info,
    update,
    state
}