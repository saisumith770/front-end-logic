import App from '../../app'
import state from './states'
import collections from './collections'
import routes from './routes'
import actions from './actions'

//controller config options
const config = {
    state,
    collections,
    routes
}

//activity controller that involes feeds and Inbox
export default App.Controller(config).root({ ...actions })