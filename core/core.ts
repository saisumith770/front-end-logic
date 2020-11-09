import App from './app'

import activity from './controllers/activity'
import auth from './controllers/auth'
import channel from './controllers/channel'
// import chat from './controllers/chat'
import platforms from './controllers/platforms'
// import stream from './controllers/stream'
import user from './controllers/user'
import vod from './controllers/vod'

const core = App.Core({
    activity,
    auth,
    channel,
    platforms,
    user,
    vod
})

export default core
export type ICore = typeof core