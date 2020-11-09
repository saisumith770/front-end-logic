import App from '../../app'
import state from './states'
import collections from './collections'
import routes from './routes'
import actions from './actions'

const config = {
    state,
    collections,
    routes
}

export default App.Controller(config).root({ ...actions })