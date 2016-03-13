import "./less/site.less";
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Chatroom from './containers/Chatroom'
import configureStore from './redux/store'

const store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory } >
      <Route path='/' component={ App } >
        <IndexRoute component={ Login } />
        <Route path='/signup' component={ Signup } />
        <Route path='/chat' component={ Chatroom } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
