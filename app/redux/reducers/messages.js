import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../../constants/ActionTypes'

// This part of the state tree needs to reflect all of the logged in users correspondence with other users
// These messages should only be created once having clicked on a user

const initialState = {}

deepFreeze(initialState)

export function messages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const { content, toUser, fromUser } = action.msg
      console.log('content----->', content);
      console.log('toUser----->', toUser);
      console.log('fromUser----->', fromUser);
      return Object.assign({}, state, { [toUser]: [].concat({ from: fromUser, content }) })
    default:
      return state
  }
}
