import React, { Component } from 'react'

export default class NavBar extends Component {
  render () {
    return (
      <div className="nav-bar">
        <span>To:<strong> Lenny</strong></span>
        <span className="right">Logout</span>
      </div>
    )
  }
}
