import Pulse from '@pulsejs/core'

const App = new Pulse({
    computedDefault: false,
    logJobs: true
})
const newCollection = App.Collection()(collection => ({
    primaryKey : 'id',
    defaultGroup : true,
    groups : {
        newGroup : collection.Group()
    },
    selectors : {
        newSelector : collection.Selector(0)
    }
}))