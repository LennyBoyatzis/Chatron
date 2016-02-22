import React, { Component } from 'react'

export default class ChatHistory extends Component {
  render() {
    const { messages } = this.props
    return (
      <div>
        { messages.length > 0 ? messages.map(message => <p key={message}>{message}</p>) : null}
      </div>
    )
  }
}
