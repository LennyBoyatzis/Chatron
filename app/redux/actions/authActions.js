import { push } from 'react-router-redux'
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants/ActionTypes'
import { BASE_URL } from '../../constants/App'


/**
* Action creator which posts the users signup creds and dispatches either
* signUpFailure or signUpSuccess
* @param { user } user's credentials incl. username && password
* @returns { dispatch }
*/

export function signup(user) {
  return dispatch => {
    dispatch(signUpRequest())
    return fetch(`${BASE_URL}/api/signup`, {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      if (res.err) return dispatch(signUpFailure({ err: res.err }))
      dispatch(signUpSuccess())
      dispatch(push('/'))
    })
    .catch(err => { throw err })
  }
}

const signUpRequest = (user) => {
  return { type: SIGN_UP_REQUEST }
}

const signUpSuccess = () => {
  return { type: SIGN_UP_SUCCESS }
}

const signUpFailure = (msg) => {
  return { type: SIGN_UP_FAILURE, msg }
}



const loginRequest = (creds) => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

const loginSucess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}
