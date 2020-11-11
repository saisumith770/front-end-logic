import { State } from '@pulsejs/core'
import App from '../../app'

import { user_data, user_state } from './interface'

//the current user information
const user: State<user_data> = App.State<user_data>({})
const state: State<user_state> = App.State<user_state>(user_state.online)

export default {
    user,
    state
}