import "./less/site.less";
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Login from './containers/Login'

ReactDOM.render((
  <Router history={ hashHistory } >
    <Route path='/' component={App} >
      <IndexRoute component={Login} />
    </Route>
  </Router>
), document.getElementById('app'))
