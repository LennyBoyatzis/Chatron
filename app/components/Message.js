import React, { Component } from 'react'

export default class Message extends Component {
  render () {
    const { content, fromUser } = this.props
    if (fromUser === 'id0000') return <div className="bubble you">{ content }</div>
    return <div className="bubble me">{ content }</div>
  }
}
