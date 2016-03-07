import socket from '../../lib/socket'
import { RECEIVE_MESSAGE, ADD_USER, FETCH_AVAILABLE_USERS_REQUEST, FETCH_AVAILABLE_USERS_SUCCESS, FETCH_AVAILABLE_USERS_FAILURE } from '../../constants/ActionTypes'
import { browserHistory } from 'react-router'
import { BASE_URL } from '../../constants/App'

export function receiveMessage(message, auth) {
  return { type: RECEIVE_MESSAGE, message, auth }
}

export function addUser(user) {
  return { type: ADD_USER, user }
}

export function fetchAvailableUsers() {

  let config = {
    method: 'GET',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  }

  return dispatch => {
    dispatch(fetchAvailableUsersRequest())
    return fetch(`${BASE_URL}/api/user/get`, config)
      .then(response => response.json())
      .then(response => {
        if (response.err) return dispatch(fetchAvailableUsersFailure())
        dispatch(fetchAvailableUsersSuccess(response))
      }).catch(err => { throw err })
  }

}

const fetchAvailableUsersRequest = () => {
  return { type: FETCH_AVAILABLE_USERS_REQUEST }
}

const fetchAvailableUsersSuccess = (users) => {
  return { type: FETCH_AVAILABLE_USERS_SUCCESS, users }
}

const fetchAvailableUsersFailure = () => {
  return { type: FETCH_AVAILABLE_USERS_FAILURE }
}
