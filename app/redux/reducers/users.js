import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { LOGIN_SUCCESS, ADD_USER, FETCH_AVAILABLE_USERS_SUCCESS } from '../../constants/ActionTypes'


export function users(state = {}, action) {
  switch (action.type) {

    case FETCH_AVAILABLE_USERS_SUCCESS:
      const { users } = action
      return _.keyBy(users, 'userId')
    case LOGIN_SUCCESS:
      const { username, userId } = action.user
      return Object.assign({}, state, { [userId]: {username: username} })
    case ADD_USER:
      return Object.assign({}, state, { [action.user.userId]: {username: action.user.username} })
    default:
      return state
  }
}
