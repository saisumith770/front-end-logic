import { State } from '@pulsejs/core'
import App from '../../app'

//the current user information
const user: State<object> = App.State<object>({})

export default {
    user
}