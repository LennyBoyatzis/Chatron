import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FriendsList from '../components/FriendsList'
import ChatroomWindow from '../components/ChatroomWindow'

export default class Chatroom extends Component {
  render () {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <img src='public/images/chatron-logo.png' className="chatron-logo" width='100px' />
              <FriendsList users={ users } />
            </div>
            <div className="pane">
              <ChatroomWindow />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Chatroom)
