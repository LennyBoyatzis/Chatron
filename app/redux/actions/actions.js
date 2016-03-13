import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../../constants/ActionTypes'

/**
* Action creator which posts the users signup creds and dispatches either
* signUpFailure or signUpSuccess
* @param { user } user's credentials incl. username && password
* @returns { dispatch }
*/

export function signup(user) {

  let config = {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return dispatch => {
    dispatch(signUpRequest())
    return fetch(`${BASE_URL}/api/signup`, config)
      .then(res => res.json())
      .then(res => {
        if (res.err) return dispatch(signUpFailure({ err: res.err }))
        dispatch(signUpSuccess())
        dispatch(push('/'))
    }).catch(err => { throw err })
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
