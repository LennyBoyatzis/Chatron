import React, { Component, PropTypes } from 'react'
import * as actions from '../redux/actions/actions';

export default class ChatRoom extends Component {

  componentDidMount() {
    const { socket, user, dispatch } = this.props
  }

  helloPeople(e) {
    e.preventDefault()
    console.log("Hello dude")
  }

  renderChatInput() {
    return (
      <div className="input">
          <a href="javascript:;" className="input-link attach"></a>
          <input type="text" ref="msg" />
          <a href="javascript:;" className="input-link smiley"></a>
          {<button onClick={ () => sendMessage({ content: this.refs.msg.value }) } className="input-link send"></button> }
      </div>
    )
  }

  render() {
    return (
      <div className="column chat-box">
        <p>ChatContainer</p>
        { this.renderChatInput() }
      </div>
    )
  }
}

ChatRoom.propTypes = {
  messages: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}
