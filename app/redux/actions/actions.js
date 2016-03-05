import socket from '../../lib/socket'
import { types } from '../../constants/ActionTypes'
import { browserHistory } from 'react-router'
import { BASE_URL } from '../../constants/App'

export function receiveMessage(message) {
  return { type: types.RECEIVE_MESSAGE, message }
}

export function addUser(user) {
  return { type: types.ADD_USER, user }
}

export function fetchAvailableUsers() {

  let config = {
    method: 'GET',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  }

  return dispatch => {
    dispatch(fetchAvailableUsersRequest())
    return fetch(`${BASE_URL}/api/users/get`, config)
      .then(response => res.json())
      .then(response => {
        if (response.err) return dispatch(fetchAvailableUsersFailure())
        dispatch(fetchAvailableUsersSuccess(users))
      }).catch(err => { throw err })
  }

}
