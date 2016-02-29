import socket from '../../lib/socket'
import { RECEIVE_MESSAGE, ADD_USER } from '../../constants/ActionTypes'
import { browserHistory } from 'react-router';

export function receiveMessage(message) {
  return { type: RECEIVE_MESSAGE, message }
}

export function addUser(user) {
  return { type: ADD_USER, user }
}
