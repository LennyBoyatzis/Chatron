import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Signup extends Component {

  render() {
    return (
      <div>
        <div className="form">
          <img src='public/images/chatron-logo.png' className="chatron-logo" width='250px' />
          <form>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" ref="username" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" ref="password" />
            </div>
          </form>
          <a className="form__button">Signup</a>
          <Link to='/' className="form__link">Back to Login</Link>
        </div>
      </div>
    )
  }
}
