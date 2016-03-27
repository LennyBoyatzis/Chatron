import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Login extends Component {
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
          <Link to='/chat' className="form__button">Login</Link>
          <Link to='/signup' className="form__link">Not a member? Sign up</Link>
        </div>
      </div>
    )
  }
}
