import App from '../../app'
import collections from './collections'
import routes from './routes'
import actions from './actions'

//controller config options
const config = {
    collections,
    routes
}

//channel controller handles subcriptions
export default App.Controller(config).root({ ...actions })