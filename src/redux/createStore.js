import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import pageReducer from '@ducks/Page'
import photoViewerReducer from '@ducks/PhotoViewer'

const reducers = combineReducers({
  routing: routerReducer,
  page: pageReducer,
  photoViewer: photoViewerReducer
})

// Redux config
let middlewares = [thunk]
if(Config.env !== 'prod') {
  middlewares = [ ...middlewares, createLogger() ]
}
const middleware = applyMiddleware(...middlewares)
const store = createStore(reducers, middleware)

export default store