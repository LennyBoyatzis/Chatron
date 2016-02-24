import React, { Component, PropTypes } from 'react'
import Link from 'react-router'
import ChatRoomInput from '../components/ChatRoomInput'
import ChatRoomWindow from '../components/ChatRoomWindow'
import ChatRoomList from '../components/ChatRoomList'

export default class ChatRoomWindow extends Component {
  render() {
    return (
      <div className="chatroom">
        <div className="column friends-list">
          <ChatRoomList />
        </div>
        <div className="column chat-box">
          <ChatRoomWindow messages={ messages }/>
          <ChatRoomInput />
        </div>
      </div>
    )
  }
}
