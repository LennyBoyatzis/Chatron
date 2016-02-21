import React, { Component, PropTypes } from 'react'
import { sendMessage } from '../redux/actions/actions'

export default class ChatInput extends Component {

  render() {
    return (
      <div className="input">
          <a className="input-link attach"></a>
          <input
            type="text"
            autoFocus="true"
            placeholder="Type here to chat!"
            ref="msg"
          />
          <a className="input-link smiley"></a>
          <a
            className="input-link send"
            onClick={() => { sendMessage({ content: this.refs.msg.value })}}
          ></a>
      </div>
    )
  }
}
