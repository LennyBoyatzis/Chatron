import _ from 'lodash'
import { FETCH_AVAILABLE_USERS_SUCCESS, ADD_USER } from '../../constants/actionTypes'

export function users(state = {}, action) {
  switch (action.type) {

    case FETCH_AVAILABLE_USERS_SUCCESS:
      const { users } = action
      if (!users) return state
      return _.keyBy(users, 'userId')
    case ADD_USER:
      const { userId, username } = action.user.user
      return Object.assign({}, state, { [userId]: {username: username, currentlyOnline: true} })
    default:
      return state
  }
}
