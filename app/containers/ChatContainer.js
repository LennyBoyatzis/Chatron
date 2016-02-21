import React, { Component, PropTypes } from 'react'
import ChatRoom from '../components/ChatRoom'
import FriendsList from '../components/FriendsList'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../redux/actions/actions'
import io from 'socket.io-client'

//const socket = io('', {path: 'http://localhost:3001'})

export default class ChatContainer extends Component {
  render() {
    const { messages, dispatch } = this.props
    return (
      <div className="appWrapper">
        <div className="chatroom">
          <FriendsList />
          {/* <ChatRoom {...this.props} socket={socket} />
          <FriendsList /> */}
        </div>
      </div>
    )
  }
}

ChatContainer.propTypes = {
  messages: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    messages: state.message
  }
}

export default connect(mapStateToProps)(ChatContainer)
