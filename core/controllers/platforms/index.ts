import App from '../../app'
import collections from './collections'
import routes from './routes'
import actions from './actions'

//controller config options
const config = {
    collections,
    routes
}

//platforms controller handles the connections with multiple platforms
export default App.Controller(config).root({ ...actions })