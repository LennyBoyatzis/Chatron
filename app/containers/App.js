import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import socket from '../lib/socket'
import { adduser, recieveUser } from '../redux/actions/actions'
import { ADD_USER, RECEIVE_MESSAGE } from '../constants/actionTypes'

export default class App extends Component {

  componentDidMount() {
    const { dispatch, auth } = this.props
    socket.on('addUser', (user) => {
      dispatch(adduser({ type: ADD_USER, user }))
    })
    socket.on('directMessage', (msg) => {
      dispatch({ type: RECEIVE_MESSAGE, msg, auth })
    })
  }

  render() {
    return (
      <div className="appWrapper">
        { this.props.children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

function mapStateToProps(state, props) {
  return {
    users: state.users,
    messages: state.messages,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
