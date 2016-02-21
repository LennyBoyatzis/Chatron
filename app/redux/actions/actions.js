import axios from 'axios'
export const NEW_MESSAGE = 'NEW_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'

export function newMessage(message) {
  const { id, name, content } = JSON.parse(message);
  return { type: NEW_MESSAGE, id, name, content };
}

export function sendMessage(message) {
  //axios.post('http://localhost:3000/message', message);
}
