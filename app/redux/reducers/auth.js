import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { ADD_USER, REMOVE_USER } from '../actions/actions'

const initialState = {
  'loggedInUser': 0
}

deepFreeze(initialState)

export function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return state
    case REMOVE_USER:
      return state
    default:
      return state
  }
}
