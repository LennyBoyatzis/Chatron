import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Navigation } from 'react-router'
import { FormRow, FormField, FormInput } from 'elemental'
import { ADD_USER } from '../redux/actions/actions'
import { addUser } from '../lib/emit'

export default class Login extends Component {

  handleSubmit (e) {
    addUser(this.refs.username.value)
  }

  render() {
    return (
      <div className="login-form">
        <h1 className="heading">Login</h1><br/>
        <FormField>
          <input className="form__element" type="text" name="username" placeholder="Username" ref="username"/>
          <input className="form__element" type="text" name="password" placeholder="Password" ref="password"/>
        </FormField>
        <div onClick={this.handleSubmit.bind(this)}>
          <Link to='/chat/users' className="form__button">Go to chatroom</Link>
        </div>
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
