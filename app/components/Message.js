import React, { Component } from 'react'

export default class Message extends Component {
  render () {
    const { content } = this.props
    return (
      <div className="bubble you">{ content }</div>
    )
  }
}
