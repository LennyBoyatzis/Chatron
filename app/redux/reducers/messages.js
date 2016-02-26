import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../actions/actions'

// This part of the state tree needs to reflect all of the logged in users correspondence with other users
// These messages should only be created once having clicked on a user

const initialState = {
  "1": [
    { from: "0", content: 'Hey, how are you doing'},
    { from: "1", content: 'Yeah not too bad'},
    { from: "0", content: 'Good to hear!'}
  ],
  "2": [
    { from: "0", content: 'You going to the game this wkend?'},
    { from: "2", content: 'Probably not, got a family lunch on'},
    { from: "0", content: 'Bummer!'}
  ],
  "3": [
    { from: "0", content: 'Hey, how are you doing'},
    { from: "3", content: 'Hey, good thanks and you?'},
    { from: "0", content: 'Pretty good thanks'}
  ],
  "4": [
    { from: "0", content: 'Hey, whats news?'},
    { from: "4", content: 'I dropped my iphone and broke the screen'},
    { from: "0", content: 'Ouccch!'}
  ]
}

deepFreeze(initialState)

export function messages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
    const { content, userId } = action.msg
      return {
        [userId]: [].concat({ to: userId, content})
      }
    default:
      return state
  }
}
