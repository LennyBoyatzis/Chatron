'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import configureStore from './redux/store'
import App from './containers/App'
import ChatRoom from './containers/ChatRoom'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={ hashHistory } >
      <Route path='/' component={App} >
        <IndexRoute component={ChatRoom} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
