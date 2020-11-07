import App from '../../app'
import state from './states'
import routes from './routes'
import actions from './actions'

//controller config options
const config = {
    state,
    routes
}

//the auth controller that involves all login and registration
export default App.Controller(config).root({ ...actions })