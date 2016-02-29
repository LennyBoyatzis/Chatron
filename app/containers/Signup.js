import React, { Component, PropTypes } from 'react'
import { FormField, FileDragAndDrop } from 'elemental'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { signup } from '../redux/actions/authActions'

export default class Signup extends Component {

  handleClick() {
    const { dispatch } = this.props
    dispatch(signup({ username: this.refs.username.value, password: this.refs.password.value }))
  }

  render() {
    return (
      <div className="login-form">
        <h1 className="heading">Signup</h1><br/>
        <FormField>
          <input className="form__element" type="text" name="username" placeholder="Enter name" ref="username" ref="username" />
          <input className="form__element" type="text" name="password" placeholder="Enter password" ref="password" ref="password" />
          <FileDragAndDrop label="Upload Profile Picture" onDrop={() => {console.log('file is loaded')}}/>
        </FormField>
        <div>
          <a className="form__button" onClick={this.handleClick.bind(this)}>Register</a>
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

export default connect(mapStateToProps)(Signup)
