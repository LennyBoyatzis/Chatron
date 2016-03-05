import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { RECEIVE_USERS } from '../actions/actions'
import { LOGIN_SUCCESS } from '../../constants/ActionTypes'

const initialState = {
  'id2123': {
    name: 'Molly Malone',
  },
  'id8910': {
    name: 'Nick Matenaar',
  },
  'id4567': {
    name: 'Anna Simpson',
  },
  'id0000': {
    name: 'Stanley Boyatzis',
  }
}

deepFreeze(initialState)

export function users(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      const { users } = action
      return Object.assign({}, state, users )
    case LOGIN_SUCCESS:
      const { username, userId } = action.user
      return Object.assign({}, state, { [userId]: {name: username} })
    default:
      return state
  }
}
