import routes from './routes'
import states from './states'

import { user_data, user_state } from './interface'

//get user info and update state
function info(payload: { domain: string, info: user_data }) {
    routes.info(payload)
        .then(data => {
            if (data.status === 200) states.user.set(data.data)
            else console.log('err')
        })
}

//update user info and state
function update(payload: { user_id: string, data: user_data }) {
    routes.update(payload)
        .then(data => {
            if (data.status) states.user.patch(data.data)
            else console.log('err')
        })
}

//get the current state
function updateState(user_id: string, payload: { state: user_state }) {
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