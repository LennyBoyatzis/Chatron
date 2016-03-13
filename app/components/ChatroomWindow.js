import React, { Component, PropTypes } from 'react'

export default class ChatroomWindow extends Component {
  render() {
    return (
      <div className="form-group chatroom-window">
        <div className="form-group chatroom-content">
          <div className="bubble you">Hi, How are you?</div>
          <div className="bubble me">I am good thanks and you?</div>
          <div className="bubble you">Yeah not too bad, glad it's the weekend. What you doing this weekend?</div>
          <div className="bubble me">Weather is great so I'll probably head to the beach</div>
        </div>
        <div className="input">
          <input type="text" autoFocus="true" placeholder="Type here to chat!" ref="msg"  className="form-control input" />
          <a className="input-link send"><span className="icon icon-paper-plane"></span></a>
        </div>
      </div>
    )
  }
}
