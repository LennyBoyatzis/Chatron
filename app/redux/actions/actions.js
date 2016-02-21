import axios from 'axios'
import io from 'socket.io-client'
import { dispatch } from "redux-thunk"

export const NEW_MESSAGE = 'NEW_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'

const socket = io('http://localhost:3001')

export function newMessage(message) {
  const { content } = JSON.parse(message);
  return { type: NEW_MESSAGE, content };
}

export function sendMessage(message) {
  socket.emit('chat message', message)
  socket.on('chat message', (msg) => {
    console.log("what do I with the messages here?")
  })
}
