import socket from '../../lib/socket'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

export function receiveMessage(message) {
  return { type: RECEIVE_MESSAGE, message };
}
