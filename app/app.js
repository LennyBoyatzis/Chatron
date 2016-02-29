
import "./less/site.less";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import configureStore from './redux/store'
import App from './containers/App'
import Login from './containers/Login'
import Signup from './containers/Signup'
import ChatRoom from './containers/ChatRoom'
import ChatRoomWindow from './components/ChatRoomWindow'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={ hashHistory } >
      <Route path='/' component={App} >
        <IndexRoute component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/chat/users' component={ChatRoom} >
          <Route path='/chat/users/:userId' component={ChatRoomWindow} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
