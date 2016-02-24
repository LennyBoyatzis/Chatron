import socket from '../../lib/socket'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function receiveMessage(message) {
  return { type: RECEIVE_MESSAGE, message };
}

export function login(user) {
  return { type: LOGIN, user };
}

export function logout(user) {
  return { type: LOGOUT, user };
}
