import { push } from 'react-router-redux'
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../../constants/ActionTypes'
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

/**
* Action creator which posts the users login creds and dispatches either
* loginSuccess or loginError
* @param { creds } user's credentials incl. username && password
* @returns { dispatch }
*/

export function loginUser(creds) {
  console.log("loginUser actionCreator----->")
  console.log("creds----->", creds)
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestLogin(creds))

    return fetch(`${BASE_URL}/sessions/create`, config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!reponse.ok) {
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          localStorage.setItem('id_token', user.id_token)
          dispatch(loginSucess(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
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

/**
* Action creator which is responsible for logging the user out. It removes the local storage token and dispatches LOGOUT_SUCCESS action
* @returns { dispatch }
*/

export function logoutUser() {
  return dispatch => {
    dispatch(logoutRequest())
    localStorage.removeItem('id_token')
    dispatch(logoutSucess())
  }
}

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

const logoutSucess = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}
