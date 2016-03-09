import React, { Component } from 'react'
import { logoutUser } from '../redux/actions/authActions'

export default class NavBar extends Component {

  handleSubmit (e) {
    const { dispatch } = this.props
    dispatch(logoutUser(userId));
  }

  render () {
    return (
      <div className="nav-bar">
        <span>To:<strong> Lenny</strong></span>
        <span onClick={ this.handleSubmit.bind(this) } className="right">Logout</span>
      </div>
    )
  }
}
