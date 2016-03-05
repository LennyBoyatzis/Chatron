import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../../constants/ActionTypes'

const initialState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('id_token')
}

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
        signUpError: true,
        signUpErrorMsg: msg.err
      })

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })

    case LOGIN_SUCCESS:
      const { user } = action
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user
      })

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      })

    default:
      return state

  }
}
