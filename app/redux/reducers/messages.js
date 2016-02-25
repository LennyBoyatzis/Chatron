import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../actions/actions'

// This part of the state tree needs to reflect all of the logged in users correspondence with other users
// These messages should only be created once having clicked on a user

const initialState = {
  "1": [
    { from: "0", content: 'Hey, how are you doing'},
    { from: "1", content: 'Hey, good thanks and you?'},
    { from: "0", content: 'Pretty good thanks'}
  ],
  "2": [
    { from: "0", content: 'Hey, how are you doing'},
    { from: "2", content: 'Hey, good thanks and you?'},
    { from: "0", content: 'Pretty good thanks'}
  ],
  "3": [
    { from: "0", content: 'Hey, how are you doing'},
    { from: "3", content: 'Hey, good thanks and you?'},
    { from: "0", content: 'Pretty good thanks'}
  ],
  "4": [
    { from: "0", content: 'Hey, how are you doing'},
    { from: "4", content: 'Hey, good thanks and you?'},
    { from: "0", content: 'Pretty good thanks'}
  ]
}

const initialState = {}

deepFreeze(initialState)

export function messages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
    console.log("here is our action", action)
    const { content, userId } = action.msg
      return {
        [userId]: [].concat({ to: userId, content})
      }
    default:
      return state
  }
}

// [id]: [].concat(state[userId]).concat({ from: userId, msg})
