import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { SIGN_UP_FAILURE } from '../../constants/ActionTypes'

const initialState = {}

deepFreeze(initialState)

export function auth(state = initialState, action) {
  switch (action.type) {

    case SIGN_UP_FAILURE:
      const { msg } = action
      return Object.assign({}, state, { signUpSuccess: false, msg: msg.err })

    default:
      return state

  }
}

// case ADD_USER:
//   const { user, userId } = action.user
//   return { username: user, userId: userId }
