import React, { Component } from 'react'

export default class CurrentUserInfo extends Component {
  render () {
    const { loggedInUser } = this.props
    console.log('loggedInUser', loggedInUser)
    return (
      <div className="user-info">{ loggedInUser.user.username  ? loggedInUser.user.username : 'Joe Blogs' }</div>
    )
  }
}
