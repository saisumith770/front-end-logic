import App from '../../app'
import state from './states'
import routes from './routes'
import actions from './actions'

const config = {
    state,
    routes
}

export default App.Controller(config).root({ ...actions })