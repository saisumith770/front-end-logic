import routes from './routes'
import states from './states'

import { user_data } from './interface'

function info(payload: { domain: string, info: user_data }) {
    routes.info(payload)
        .then(data => {
            if (data.status === 200) states.user.set(data.data)
            else console.log('err')
        })
}

function update(payload: { user_id: string, data: user_data }) {
    routes.update(payload)
        .then(data => {
            if (data.status) states.user.patch(data.data)
            else console.log('err')
        })
}

function updateState(user_id: string, payload: { state: object }) {
    routes.state(user_id, payload)
        .then(data => {
            if (data.status === 200) states.state.set(payload.state)
        })
}

export default {
    info,
    update,
    updateState
}