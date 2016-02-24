import React, { Component, PropTypes } from 'react'
import Link from 'react-router'

export default class Login extends Component {
  render() {
    return (
      <div>
        <p>We are at the login page</p>
        <Link to='/chat/users'>Go to chatroom</Link>
      </div>
    )
  }
}
