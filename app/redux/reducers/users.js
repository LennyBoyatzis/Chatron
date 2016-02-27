import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { ADD_USER } from '../actions/actions'

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
    case ADD_USER:
      const { user, userId } = action.user
      return Object.assign({}, state, { [userId]: {name: user} })
    default:
      return state
  }
}
