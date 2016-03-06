import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../../constants/ActionTypes'

// This part of the state tree needs to reflect all of the logged in users correspondence with other users
// These messages should only be created once having clicked on a user

// userId = 'IDIvB3'
//
// {
//   IDq7jz: [
//     { from: 'IDIvB3', message: 'How are you going'}
//     { from: 'IDq7jz', message: 'Pretty good and you?'}
//     { from: 'IDIvB3', message: 'Yeah not bad thanks'}
//   ]
// }

export function messages(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const { content, toUser, fromUser } = action.msg
      const userArray = state[toUser] ? state[toUser] : []
      return Object.assign({}, state, { [fromUser]: userArray.concat({ from: fromUser, content }) })
    default:
      return state
  }
}
