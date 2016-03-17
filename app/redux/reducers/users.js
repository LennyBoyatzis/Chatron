import _ from 'lodash'
import { FETCH_AVAILABLE_USERS_SUCCESS } from '../../constants/ActionTypes'

export function users(state = {}, action) {
  switch (action.type) {

    case FETCH_AVAILABLE_USERS_SUCCESS:
      const { users } = action
      return _.keyBy(users, 'userId')
    default:
      return state
  }
}
