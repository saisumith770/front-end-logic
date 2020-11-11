import App from '../../app'
import state from './states'
import routes from './routes'
import actions from './actions'

//controller config options
const config = {
    state,
    routes
}

//user controller stores information about the current user
export default App.Controller(config).root({ ...actions })