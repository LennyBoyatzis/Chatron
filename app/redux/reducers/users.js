import _ from 'lodash'
import { FETCH_AVAILABLE_USERS_SUCCESS } from '../../constants/actionTypes'

export function users(state = {}, action) {
  switch (action.type) {

    case FETCH_AVAILABLE_USERS_SUCCESS:
      const { users } = action
      console.log("here are the users", users)
      if (!users) return state
      return _.keyBy(users, 'userId')
    default:
      return state
  }
}
