import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { signup } from '../redux/actions/actions.js'


export default class Signup extends Component {

  handleClick() {
    const { dispatch } = this.props
    dispatch(signup({ username: this.refs.username.value, password: this.refs.password.value}))
  }

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
          <a className="form__button" onClick={ this.handleClick.bind(this) }>Signup</a>
          <Link to='/' className="form__link">Back to Login</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Signup)
