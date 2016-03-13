import React, { Component, PropTypes } from 'react'

export default class ChatroomWindow extends Component {
  render() {
    return (
      <div className="form-group chatroom-window">
        <div className="form-group chatroom-content">
          
        </div>
        <div className="input">
          <input type="text" autoFocus="true" placeholder="Type here to chat!" ref="msg"  className="form-control input" />
          <a className="input-link send"><span className="icon icon-paper-plane"></span></a>
        </div>
      </div>
    )
  }
}
