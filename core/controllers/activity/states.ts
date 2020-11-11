import { State } from '@pulsejs/core'
import App from '../../app'

//previous feed id for data pagination
const feed_id: State<string> = App.State<string>("")

export default {
    feed_id
}