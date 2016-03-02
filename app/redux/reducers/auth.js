import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { ADD_USER } from '../actions/actions'
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions/authActions'

const initialState = {}

deepFreeze(initialState)

export function auth(state = initialState, action) {
  switch (action.type) {
    case: SIGN_UP_FAILURE:
      const { err } = action
      return 


    case ADD_USER:
      const { user, userId } = action.user
      return { username: user, userId: userId }
    default:
      return state
  }
}
