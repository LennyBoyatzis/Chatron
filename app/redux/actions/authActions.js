import { push } from 'react-router-redux'
import { SIGN_UP_REQUEST } from '../../constants/ActionTypes'

const BASE_URL = 'http://localhost:3001'

export function signup(user) {
  return { type: SIGN_UP_REQUEST, user }
}

export function signUpRequest() {
  return { type: SIGN_UP_REQUEST }
}

export function signup(user) {
  return dispatch => {
    dispatch(signUpRequest())
    return fetch(`${BASE_URL}/api/signup`, {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.ok) dispatch(push('/'))
    })
    .catch(err => { throw err })
  }
}
