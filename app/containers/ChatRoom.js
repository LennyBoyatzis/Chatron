import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import ChatRoomWindow from '../components/ChatRoomWindow'
import ChatRoomList from '../components/ChatRoomList'
import socket from '../lib/socket';

export default class ChatRoom extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    socket.on('directMessage', (msg) => {
      dispatch({ type: 'RECEIVE_MESSAGE', msg })
    })
  }

  render() {
    const { users } = this.props
    return (
      <div className="chatroom">
        <div className="column friends-list">
          <ChatRoomList users={ users } />
        </div>
        <div className="column chat-box">
          <ChatRoomWindow users= { users } />
        </div>
      </div>
    )
  }
}

// <ChatRoomWindow messages={ messages }/>

function mapStateToProps(state, props) {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps)(ChatRoom)
