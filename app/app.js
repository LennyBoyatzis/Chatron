
import "./less/site.less";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import configureStore from './redux/store'
// import App from './containers/App'
import ChatContainer from './containers/ChatContainer'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={ hashHistory } >
      <Route path='/' component={ChatContainer} />
    </Router>
  </Provider>
), document.getElementById('app'))
