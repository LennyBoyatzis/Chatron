import socket from '../../lib/socket'
import { types } from '../../constants/ActionTypes'
import { browserHistory } from 'react-router';

export function receiveMessage(message) {
  return { type: types.RECEIVE_MESSAGE, message }
}

export function addUser(user) {
  return { type: types.ADD_USER, user }
}
