import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FriendsList from '../components/FriendsList'
import * as actions from '../redux/actions/actions'
import ChatInput from '../components/ChatInput'
import ChatRoomWindow from '../components/ChatRoomWindow'
import socket from '../lib/socket';

export default class ChatRoom extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    socket.on('directMessage', (msg) => {
      dispatch({ type: 'RECEIVE_MESSAGE', msg })
    })
  }

  render() {
    const { messages } = this.props
    return (
      <div className="appWrapper">
        <div className="chatroom">
          <FriendsList />
          <div className="chat-box column">
            <ChatRoomWindow messages={ messages }/>
            <ChatInput />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps)(ChatRoom)
