import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../../constants/actionTypes'

export function auth(state = {}, action) {
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

    default:
      return state
  }
}
