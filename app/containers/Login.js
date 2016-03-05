import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Navigation } from 'react-router'
import { FormRow, FormField, FormInput } from 'elemental'
// import { addUser } from '../lib/emit'
import { loginUser } from '../redux/actions/authActions'

export default class Login extends Component {

  handleSubmit (e) {
    const { dispatch } = this.props
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    dispatch(loginUser(creds));
  }

  render() {
    return (
      <div className="login-form">
        <h1 className="heading">Login</h1><br/>
        <FormField>
          <input className="form__element" type="text" name="username" placeholder="Username" ref="username"/>
          <input className="form__element" type="text" name="password" placeholder="Password" ref="password"/>
        </FormField>
        <a onClick={this.handleSubmit.bind(this)} className="form__button">
          Go to chatroom
        </a>
        <Link to='/signup' className="form__link">Not a member? Sign up</Link>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps)(Login)
