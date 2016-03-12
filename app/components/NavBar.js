import React, { Component } from 'react'
import _ from 'lodash'
import { logoutUser } from '../redux/actions/authActions'

export default class NavBar extends Component {

  handleSubmit (e) {
    const { dispatch, loggedInUser } = this.props
    dispatch(logoutUser(loggedInUser.user));
  }

  render () {
    const { toUser, users } = this.props
    const talkingTo = _.find(users, { 'userId': toUser.userId })
    return (
      <div className="nav-bar">
        { talkingTo ? <span><strong>To:</strong> { talkingTo.username } </span> : null }
        <span onClick={ this.handleSubmit.bind(this) } className="right">Logout</span>
      </div>
    )
  }
}
