import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../../constants/ActionTypes'

//Lenny = 'IDlvB3'
// this is lenny saying hello to two different people and their responses

// messages = {
//   'IDiLiB': [
//     { from: 'IDlvB3', content: 'Hey man' },
//     { from: 'IDiLiB', content: 'Hey Lenny' },
//     { from: 'IDiLiB', content: 'How are you going' },
//   ],
//   'IDq7jz': [
//     { from: 'IDlvB3', content: 'Hey man' },
//     { from: 'IDq7jz', content: 'Hey Lenny' },
//     { from: 'IDq7jz', content: 'What you doing' },
//   ]
// }


export function messages(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const { userId } = action.auth.user
      const { content, toUser, fromUser } = action.msg
      const toUserArray = state[toUser] ? state[toUser] : []
      const fromUserArray = state[fromUser] ? state[fromUser] : []

      if ( toUser !== userId && fromUser !== userId) return state
      return Object.assign({}, state, { [toUser]: toUserArray.concat({ from: fromUser, content }) }, { [fromUser]: fromUserArray.concat({ from: fromUser, content }) })

    default:
      return state
  }
}
