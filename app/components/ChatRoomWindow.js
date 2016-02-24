import React, { Component } from 'react'
import ChatRoomInput from './ChatRoomInput'
import { connect } from 'react-redux'

export default class ChatRoomWindow extends Component {
  render() {
    // const { messages } = this.props
    return (
      <div>
        <div>
          {/* messages.length > 0 ? messages.map(message => <div className="bubble you" key={message}>{message}</div>) : null */}
        </div>
        <ChatRoomInput />
      </div>
    )
  }
}

// render() {
//   this.props.messages.map(message => {
//     return <Message from={this.props.users[message.from]} content=message.msg />
//   })
// }

function mapStateToProps(state, props) {
  return {
    users: state.users
  }
}

// return {
//   users: state.users,
//   messages: state.messages[props.routeParams.userId]
// }

export default connect(mapStateToProps)(ChatRoomWindow)
