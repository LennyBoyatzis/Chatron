import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import ChatRoomWindow from '../components/ChatRoomWindow'
import ChatRoomList from '../components/ChatRoomList'
import ChatRoomInput from '../components/ChatRoomInput'
import socket from '../lib/socket'

export default class ChatRoom extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    socket.on('directMessage', (msg) => {
      dispatch({ type: 'RECEIVE_MESSAGE', msg })
    })
    socket.on('addUser', (user) => {
      dispatch({ type: 'ADD_USER', user })
    })
  }

  render() {
    const { users, params } = this.props
    return (
      <div className="chatroom">
        <div className="column friends-list">
          <ChatRoomList users={ users } />
        </div>
        <div className="column chat-box">
          { this.props.children }
          <ChatRoomInput userId={ params.userId } />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.users,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ChatRoom)
