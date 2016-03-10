import React, { Component } from 'react'
import { logoutUser } from '../redux/actions/authActions'

export default class NavBar extends Component {

  handleSubmit (e) {
    const { dispatch, loggedInUser } = this.props
    dispatch(logoutUser(loggedInUser.user));
  }

  render () {
    return (
      <div className="nav-bar">
        <span>To:<strong> { this.props.loggedInUser.user.username }</strong></span>
        <span onClick={ this.handleSubmit.bind(this) } className="right">Logout</span>
      </div>
    )
  }
}
