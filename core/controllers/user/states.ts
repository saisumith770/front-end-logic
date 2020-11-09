import { State } from '@pulsejs/core'
import App from '../../app'

//the current user information
const user: State<object> = App.State<object>({})
const feed_id: State<string> = App.State<string>("")
const state: State<object> = App.State<object>({})

export default {
    user,
    feed_id,
    state
}