import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../../constants/ActionTypes'

const initialState = {}

deepFreeze(initialState)

export function auth(state = initialState, action) {
  switch (action.type) {

    case SIGN_UP_REQUEST:
      return state

    case SIGN_UP_SUCCESS:
      return state

    case SIGN_UP_FAILURE:
      const { msg } = action
      return Object.assign({}, state, {
        user: {
          username: null,
          id: null
        },
        signUpErrorMsg: msg.err
      })

    default:
      return state

  }
}

// case ADD_USER:
//   const { user, userId } = action.user
//   return { username: user, userId: userId }
