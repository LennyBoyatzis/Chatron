import socket from '../../lib/socket'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const ADD_USER = 'ADD_USER'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveMessage(message) {
  return { type: RECEIVE_MESSAGE, message };
}

export function addUser(user) {
  return { type: ADD_USER, user };
}
