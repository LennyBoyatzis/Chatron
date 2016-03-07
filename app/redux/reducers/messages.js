import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_MESSAGE } from '../../constants/ActionTypes'

// This part of the state tree needs to reflect all of the logged in users correspondence with other users
// These messages should only be created once having clicked on a user

//Lenny = 'IDq7jz'
// this is lenny saying hello to three different people and their responses

// messages = {
//   'IDiLiB': [
//     { from: 'IDq7jz', content: 'Hey man' },
//     { from: 'IDiLiB', content: 'Hey Lenny' },
//     { from: 'IDiLiB', content: 'How are you going' },
//   ],
//   'SDFDST': [
//     { from: 'IDq7jz', content: 'Hey man' },
//     { from: 'SDFDST', content: 'Hey Lenny' },
//     { from: 'SDFDST', content: 'What you up to today' },
//   ],
//   'ASADAD': [
//     { from: 'IDq7jz', content: 'Hey man' },
//     { from: 'ASADAD', content: 'Hey Lenny' },
//     { from: 'ASADAD', content: 'What you doing' },
//   ]
// }

export function messages(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const { content, toUser, fromUser } = action.msg
      console.log("toUser--->", toUser)
      console.log("fromUser--->", fromUser)
      const toUserArray = state[toUser] ? state[toUser] : []
      return Object.assign({}, state, { [toUser]: toUserArray.concat({ from: fromUser, content }) })
    default:
      return state
  }
}

// return Object.assign({}, state, { [fromUser]: toUserArray.concat({ from: fromUser, content }) }, { [toUser]: fromUserArray.concat({ from: fromUser, content}) })
