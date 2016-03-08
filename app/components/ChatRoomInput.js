import React, { Component, PropTypes } from 'react'
import { sendMessage } from '../lib/emit'

export default class ChatInput extends Component {

  handleInputChange (e) {
    const { toUser, loggedInUser } = this.props
    if (e.keyCode === 13) {
      sendMessage({ content: this.refs.msg.value, toUser: toUser, fromUser: loggedInUser.user.userId })
      this.refs.msg.value = ''
    }
  }

  render() {
    return (
      <div className="input">
        <a className="input-link attach"></a>
        <input type="text" autoFocus="true" placeholder="Type here to chat!" ref="msg" onKeyDown={this.handleInputChange.bind(this)} />
        <a className="input-link smiley"></a>
        <a className="input-link send" onClick={() => sendMessage({ content: this.refs.msg.value })}></a>
      </div>
    )
  }
}
