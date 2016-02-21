import React, { Component, PropTypes } from 'react'
import FriendsList from '../components/FriendsList'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../redux/actions/actions'
import { sendMessage } from '../redux/actions/actions'

export default class ChatRoom extends Component {
  render() {
    const { messages, dispatch } = this.props
    return (
      <div className="appWrapper">
        <div className="chatroom">
          { _.map(messages, message => <p>{message.content}</p>) }
          <div className="column chat-box">
            <div className="input">
                <a className="input-link attach"></a>
                <input type="text" autoFocus="true" placeholder="Type here to chat!" ref="msg" />
                <a className="input-link smiley"></a>
                <a className="input-link send" onClick={() => { sendMessage({ content: this.refs.msg.value }) }}></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ChatRoom.propTypes = {
  messages: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    messages: state.message
  }
}

export default connect(mapStateToProps)(ChatRoom)
