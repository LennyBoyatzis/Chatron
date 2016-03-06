import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'

export default class ChatRoomWindow extends Component {
  render() {
    const { messages, users, auth } = this.props
    console.log('messages----->', messages)
    return (
      <div>
        { (messages && messages.length > 0) ? messages.map((message, i) => {
          return (
            <Message loggedInUser={ auth.user.userId } fromUser={ message.from } content={ message.content } key={ i }/>
          )
        }) : null }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.users,
    messages: state.messages[props.params.userId],
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ChatRoomWindow)
