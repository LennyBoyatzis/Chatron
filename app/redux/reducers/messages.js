import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../actions/actions'

// This part of the state tree needs to reflect all of the logged in users correspondence with other users
// These messages should only be created once having clicked on a user

const initialState = {
  "id1234": [
    { from: "id0000", content: 'Hey, how are you doing'},
    { from: "id1234", content: 'Yeah not too bad'},
    { from: "id0000", content: 'Good to hear!'}
  ],
  "id4567": [
    { from: "id0000", content: 'You going to the game this wkend?'},
    { from: "id4567", content: 'Probably not, got a family lunch on'},
    { from: "id0000", content: 'Bummer!'}
  ],
  "id8910": [
    { from: "id0000", content: 'Hey, how are you doing'},
    { from: "id8910", content: 'Hey, good thanks and you?'},
    { from: "id0000", content: 'Pretty good thanks'}
  ],
  "id2123": [
    { from: "id0000", content: 'Hey, whats news?'},
    { from: "id2123", content: 'I dropped my iphone and broke the screen'},
    { from: "id0000", content: 'Ouccch!'}
  ]
}

deepFreeze(initialState)

export function messages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const { content, toUser, fromUser } = action.msg
      return Object.assign({}, state, { [toUser]: state[toUser].concat({from: fromUser, content}) })
    default:
      return state
  }
}
