import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { hashHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import rootReducer from '../reducers'

const reduxRouterMiddleware = syncHistory(hashHistory)

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const createStoreWithMiddleWare = compose(
  applyMiddleware(thunk, reduxRouterMiddleware, logger)
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleWare(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}
