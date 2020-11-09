import App from '../../app'
import collections from './collections'
import routes from './routes'
import actions from './actions'

const config = {
    collections,
    routes
}

export default App.Controller(config).root({ ...actions })