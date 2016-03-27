
import "./less/site.less"
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/App'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Chatroom from './containers/Chatroom'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/chat' component={Chatroom} />
    </Route>
  </Router>
), document.getElementById('app'))
