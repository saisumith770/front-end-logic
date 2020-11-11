import App from '../../app'
import collections from './collections'
import routes from './routes'
import actions from './actions'

//controller config options
const config = {
    collections,
    routes
}

//the vods controller handles all the content by the users
export default App.Controller(config).root({ ...actions })