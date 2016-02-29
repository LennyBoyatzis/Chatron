import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import socket from '../lib/socket'

export default class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    socket.on('receiveUsers', (users) => {
      dispatch({ type: 'RECEIVE_USERS', users })
    })
    socket.on('receiveMessages', (messages) => {
      dispatch({ type: 'RECEIVE_MESSAGES', messages })
    })
  }

  render() {
    return (
      <div className="appWrapper">
        {this.props.children}
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
    messages: state.messages
  }
}

export default connect(mapStateToProps)(App)
