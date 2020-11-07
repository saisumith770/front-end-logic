import App from './app'

import auth from './controllers/auth'
import user from './controllers/user'

const core = App.Core({
    auth,
    user
})

export default core
export type ICore = typeof core