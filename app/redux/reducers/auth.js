import _ from 'lodash'
import deepFreeze from 'deep-freeze'
import { ADD_USER } from '../actions/actions'

const initialState = {}

deepFreeze(initialState)

export function auth(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      const { user, userId } = action.user
      console.log('action--->', action)
      console.log('user--->', user)
      console.log('userId--->', userId)
      return { username: user, userId: userId }
    default:
      return state
  }
}
