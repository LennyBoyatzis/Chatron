import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ChatroomInput from './ChatroomInput'
import _ from 'lodash'

export default class ChatroomWindow extends Component {
  render() {
    const { users, params, auth, dispatch } = this.props
    const talkingTo = _.find(users, { 'userId': params.userId })

    return (
      <div className="form-group chatroom-window">
        <div className="chatroom-navbar">
          { talkingTo ? <span><strong>To:</strong> { talkingTo.username } </span> : null }
          <a className="pull-right">Logout</a>
        </div>
        <div className="form-group chatroom-content">
          <div className="bubble you">Hi, How are you?</div>
          <div className="bubble me">I am good thanks and you?</div>
          <div className="bubble you">Yeah not too bad, glad its the weekend. What you doing this weekend?</div>
          <div className="bubble me">Weather is great so I'll probably head to the beach</div>
        </div>
        <ChatroomInput loggedInUser={ auth } toUser={ params.userId }/>
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

export default connect(mapStateToProps)(ChatroomWindow)
