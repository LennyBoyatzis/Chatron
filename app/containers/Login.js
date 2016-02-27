import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Navigation } from 'react-router'
import { FormRow, FormField, FormInput, FileDragAndDrop } from 'elemental'
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
          <input className="form__element" type="text" name="username" placeholder="Enter name" ref="username"/>
          <FileDragAndDrop label="Upload Profile Picture" onDrop={() => {console.log('file is loaded')}}/>
        </FormField>
        <div onClick={this.handleSubmit.bind(this)}>
          <Link to='/chat/users' className="form__button">Go to chatroom</Link>
        </div>
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
