import Api from '../../api'

import { user_data } from './interface'

//get validated user info
async function info(payload: { domain: string, info: user_data }) {
    return (await Api.post('app/user/info', payload))
}

//update non credentials
async function update(payload: { user_id: string, data: user_data }) {
    return (await Api.post('app/user/update', payload))
}

//get state
async function state(user_id: string, payload: { state: object }) {
    return (await Api.post(`app/activity/setState?user_id=${user_id}`, payload))
}

export default {
    info,
    update,
    state
}