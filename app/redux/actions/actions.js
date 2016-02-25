import socket from '../../lib/socket'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

export function receiveMessage(message) {
  return { type: RECEIVE_MESSAGE, message };
}

export function login(user) {
  return { type: ADD_USER, user };
}

export function logout(user) {
  return { type: REMOVE_USER, user };
}
