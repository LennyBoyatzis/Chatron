import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import FriendsList from '../components/FriendsList'
import * as actions from '../redux/actions/actions'
import ChatInput from '../components/ChatInput'
import ChatHistory from '../components/ChatHistory'
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
          <div className="column chat-box">
            <ChatHistory messages={ messages }/>
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
